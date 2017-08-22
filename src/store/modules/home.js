import api from '../api'
import * as types from '../types'

const state = {
  categories: [],
  articleList: [],
  article: {},
  loading: {
    cards: false,
    article: false
  }
}

const getters = {
  categories: state => state.categories,
  articleList: state => state.articleList,
  article: state => state.article,
  articleLoading: state => state.loading.article,
  cardsLoading: state => state.loading.cards
}

const actions = {
  // 获取分类列表
  async getCategory ({
    commit
  }) {
    let res = await api.getCategory()
    let { code, data } = res.data
    if (code === 1) {
      commit(types.GET_CATEGORIES, { data })
    }
  },
  // 获取文章列表(有分类下的文章列表)
  async getArticleList ({
    commit
  }, {
    categoryId
  }) {
    commit(types.SET_LOADING, { cards: true })
    let res = await api.getArticleList(categoryId)
    let { code, data } = res.data
    if (code === 1) {
      commit(types.GET_ARTICLELIST, { data })
      setTimeout(() => {
        commit(types.SET_LOADING, { cards: false })
      }, 500)
    }
  },
  // 获取文章
  async getArticle ({
    commit
  }, {
    articleId
  }) {
    commit(types.SET_LOADING, { article: true })
    let res = await api.getArticle(articleId)
    let { code, data } = res.data
    if (code === 1) {
      commit(types.GET_ARTICLE, { data })
      setTimeout(() => {
        commit(types.SET_LOADING, { article: false })
      }, 600)
    }
  }
}

const mutations = {
  [types.GET_CATEGORIES] (state, { data }) {
    state.categories = data
  },
  [types.GET_ARTICLELIST] (state, { data }) {
    state.articleList = data
  },
  [types.GET_ARTICLE] (state, { data }) {
    state.article = data
  },
  [types.SET_LOADING] (state, payload) {
    Object.assign(state.loading, payload)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
