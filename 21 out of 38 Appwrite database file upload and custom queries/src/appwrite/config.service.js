import config from '../config/config.js'
import { Client, Databases, Storage, Query, ID } from 'appwrite'

class Service {
  #dbId = config.appwriteDatabaseId
  #collectionId = config.appwriteCollectionId
  #bucketId = config.appwriteBucketId

  constructor() {
    this.client = new Client()
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId)

    this.databases = new Databases(this.client)
    this.storage = new Storage(this.client)
  }

  async createPost(post) {
    try {
      return await this.databases.createDocument(
        this.#dbId,
        this.#collectionId,
        post.slug,
        post
      )
    } catch (err) {
      console.error('❌ [Create Post Error]:', err)
      throw err
    }
  }

  async updatePost(slug, post) {
    try {
      return await this.databases.updateDocument(
        this.#dbId,
        this.#collectionId,
        slug,
        post
      )
    } catch (err) {
      console.error('❌ [Update Post Error]:', err)
      throw err
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        this.#dbId,
        this.#collectionId,
        slug
      )
      return true
    } catch (err) {
      console.error('❌ [Delete Post Error]:', err)
      return false
    }
  }

  async getPostBySlug(slug) {
    try {
      return await this.databases.getDocument(
        this.#dbId,
        this.#collectionId,
        slug
      )
    } catch (err) {
      console.error('❌ [Get Post Error]:', err)
      return null
    }
  }

  async getPosts(query = [Query.equal('status', 'active')]) {
    try {
      const res = await this.databases.listDocuments(
        this.#dbId,
        this.#collectionId,
        query
      )
      return res?.documents || []
    } catch (err) {
      console.error('❌ [Get Posts Error]:', err)
      return []
    }
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        this.#bucketId,
        ID.unique(),
        file
      )
    } catch (err) {
      console.error('❌ [Upload File Error]:', err)
      return null
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(this.#bucketId, fileId)
      return true
    } catch (err) {
      console.error('❌ [Delete File Error]:', err)
      return false
    }
  }

  getFilePreview(fileId) {
    return this.storage.getFilePreview(this.#bucketId, fileId)
  }
}

const service = new Service()
export default service
