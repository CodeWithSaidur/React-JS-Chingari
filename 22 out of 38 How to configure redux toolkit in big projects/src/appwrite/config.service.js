import config from '../config/config.js'
import { Client, Databases, Storage, Query, ID } from 'appwrite'

export class Service {
  client = new Client()
  databases
  storage
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId)

    this.databases = new Databases(this.client)
    this.storage = new Storage(this.client)
  }

  //   create a new post
  async createPost({
    title,
    slug,
    content,
    featuredImage,
    status,
    userId
  }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          slug,
          content,
          featuredImage,
          status
        }
      )
    } catch (error) {
      console.error('Error creating post:', error)
      throw error
    }
  }
  // update a post
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status
        }
      )
    } catch (error) {
      console.error('Error updating post:', error)
      throw error
    }
  }
  //   delete a post
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      )
      return true
    } catch (error) {
      console.error('Error deleting post:', error)
      return false
    }
  }
  //  get a post by slug
  async getPostBySlug(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      )
    } catch (error) {
      console.error('Error fetching post by slug:', error)
      return false
    }
  }
  // get posts with query
  async getPosts(query = [Query.equal('status', 'active')]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        query
      )
    } catch (error) {
      console.error('Error fetching posts:', error)
      return false
    }
  }

  // upload a file
  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      console.error('Error uploading file:', error)
      return false
    }
  }
  // delete a file
  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(config.appwriteBucketId, fileId)
      return true
    } catch (error) {
      console.error('Error deleting file:', error)
      return false
    }
  }
  // get file preview
  async getFilePreview(fileId) {
    return this.storage.getFilePreview(
      config.appwriteBucketId,
      fileId
    )
  }
}

const service = new Service()

export default service
