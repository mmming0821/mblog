import axios from 'axios'
const instance = axios.create()
axios.default.timeout = 5000

let domain = '/api'

export default {
  getCategory: () => instance.get(`${domain}/category/getCategories`),
  getArticleList: params => {
    let query = params ? `?categoryId=${params}` : ''
    return instance.get(`${domain}/article/getList${query}`)
  },
  getArticle: params => instance.get(`${domain}/article/getArticle?articleId=${params}`)
}
