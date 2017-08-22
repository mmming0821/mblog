import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['@/pages/home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['components/cards.vue'], resolve)
        },
        {
          path: 'articles/:categoryId',
          name: 'articles',
          component: resolve => require(['components/cards.vue'], resolve)
        },
        {
          path: 'article/:articleId',
          name: 'article',
          component: resolve => require(['components/article.vue'], resolve)
        },
        {
          path: 'test',
          component: resolve => require(['components/appShell.vue'], resolve)
        }
      ]
    }
  ]
})
