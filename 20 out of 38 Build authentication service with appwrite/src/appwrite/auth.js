import config from '../config/config.js'
import { Client, Account, ID } from 'appwrite'

export class AuthService {
  client = new Client()
  account

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId)

    this.account = new Account(this.client)
  }

  async createAccount({ email, password, name }) {
    try {
      await this.account.create(ID.unique(), email, password, name)
      return this.login(email, password)
    } catch (error) {
      throw new Error(error?.message || 'Account creation failed')
    }
  }

  async login(email, password) {
    try {
      return await this.account.createEmailSession(email, password)
    } catch (error) {
      throw new Error(error?.message || 'Login failed')
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get()
    } catch (error) {
      throw new Error(error?.message || 'Failed to get current user')
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions()
      return true
    } catch (error) {
      throw new Error(error?.message || 'Logout failed')
    }
  }

  async isLoggedIn() {
    try {
      const user = await this.getCurrentUser()
      return !!user
    } catch {
      return false
    }
  }
}

const authService = new AuthService()

export { AuthService, authService }
