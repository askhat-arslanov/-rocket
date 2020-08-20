export interface IApiService {
  getPosts(): Promise<any>
  getUsers(): Promise<any>
}

export default class ApiService implements IApiService {
  baseUrl = 'https://jsonplaceholder.typicode.com'

  async makeGetRequest(path: string) {
    const url = `${this.baseUrl}/${path}`

    try {
      const response = await fetch(url)
      return await response.json()
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * Getting post list
   */
  async getPosts(): Promise<any> {
    const path = 'posts'
    return await this.makeGetRequest(path)
  }

  /**
   * Getting user list
   */
  async getUsers(): Promise<any> {
    const path = 'users'
    return await this.makeGetRequest(path)
  }
}
