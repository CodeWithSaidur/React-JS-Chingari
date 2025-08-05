import conf from '../conf/conf.js'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
  client = new Client()
  databases
  bucket
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId)
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
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
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId
        }
      )
    } catch (error) {
      console.log('Appwrite service :: createPost :: error', error)
    }
  }

  // update a post
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status
        }
      )
    } catch (error) {
      console.log('Appwrite service :: updatePost :: error', error)
    }
  }

  //   delete a post
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
      return true
    } catch (error) {
      console.log('Appwrite service :: deletepost :: error', error)
      return false
    }
  }

  //  get a post by slug
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
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
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        query
      )
    } catch (error) {
      console.log('Apperite service :: getPost :: error', error)
      return false
    }
  }

  // upload a file
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      console.log('Appwrite service :: uplodedFile :: Error', error)
      return false
    }
  }

  // delete a file
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId)
      return true
    } catch (error) {
      console.log('Appwritet Service :: deleteFile :: error', error)
      return false
    }
  }

  // get file preview
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId)
  }
}

const service = new Service()

export default service
