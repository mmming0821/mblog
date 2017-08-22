<template>
  <div class="card-wrapper">
    <app-shell v-show="cardsLoading"/>
    <div v-show="!cardsLoading" class="card">
      <section class="card-item" :key="article.title" v-for="article in articleList" @click="getArticle(article.id)">
        <p class="card-item__title">{{ article.title }}</p>
        <p class="card-item__introduction">{{ article.introduction }}</p>
        <p class="card-item__date">{{ article.date }}</p>
        <div class="card-item__category">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-biaoqian1"></use>
          </svg>
          <span :key="tag" v-for="tag in article.tags">{{ tag }}</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import appShell from 'components/appShell'

export default {
  computed: {
    ...mapGetters([
      'articleList',
      'cardsLoading'
    ])
  },
  methods: {
    ...mapActions([
      'getArticleList'
    ]),
    getArticle (id) {
      this.$router.push({ name: 'article', params: { articleId: id } })
    }
  },
  mounted () {
    this.getArticleList({
      categoryId: this.$route.params.categoryId
    })
  },
  watch: {
    '$route' () {
      // 请求文章列表数据
      this.getArticleList({
        categoryId: this.$route.params.categoryId
      })
    }
  },
  components: {
    appShell
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/theme.scss";
.card-wrapper {
  flex: 2.2;
}
.card {
  flex: 2.2;
  &-item {
    border-radius: 4px;
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
      padding: 10px 15px;
    }
    padding: 20px 25px;
    margin-bottom: 20px;
    background-color: #fff;
    cursor: pointer;
    transition: all .15s ease-in-out;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    &:hover {
      box-shadow: 0 4px 20px 0 rgba(168,182,191,.6);
    }
    &:hover .card-item__title {
      color: $red;
    }
    &__title {
      color: $mainColor;
      font-size: 1.3em;
      cursor: pointer;
      transition: .25s ease;
    }
    &__date {
      color: $fontColor3;
      text-align: right;
    }
    &__introduction {
      @media screen and (max-width: 768px) {
        padding: .1em 0;
      }
      padding: 1em 0;
      color: $fontColor2;
      text-indent: 20px;
    }
    &__category {
      padding-bottom: 10px;
      display: flex;
      span {
        line-height: 1.5em;
        margin-left: 14px;
      }
    }
  }
}
</style>
