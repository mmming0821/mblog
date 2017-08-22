<template>
  <div class="article-wrapper">
    <app-shell v-show="articleLoading" /> 
    <div class="article" v-show="!articleLoading" >
      <article class="article-markdown">
        <p class="title">{{ article.title }}</p>
        <p class="date">&nbsp;&nbsp;{{ article.date }}</p>
        <div class="marked" v-html="articleMarked"></div> 
      </article>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import marked from 'marked'
import hljs from 'highlight'
import appShell from 'components/appShell'

// import 'highlight.js/styles/atom-one-dark.css'
// import 'highlight.js/styles/googlecode.css'
// import 'highlight.js/styles/github-gist.css'
hljs.configure({
  // tabReplace: '    ', // 4 spaces
  classPrefix: ''     // don't append class prefix
})
marked.setOptions({
  // renderer: new marked.Renderer(),
  // gfm: true,
  // tables: true,
  // breaks: false,
  // pedantic: false,
  // sanitize: true,
  // smartLists: true,
  // smartypants: false,
  highlight: function (code) {
    return hljs.highlightAuto(code).value
  }
})

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'article',
      'articleLoading'
    ]),
    articleMarked () {
      return marked(this.article.content || '')
    }
  },
  methods: {
    ...mapActions([
      'getArticle'
    ]),
    ...mapMutations({
      setLoading: 'SET_LOADING'
    })
  },
  mounted () {
    this.getArticle({
      articleId: this.$route.params.articleId
    })
  },
  destroyed () {
    this.setLoading({ article: false })
  },
  components: {
    appShell
  }
}
</script>


<style lang="scss" scoped>
@import "../assets/scss/theme.scss";
.article-wrapper {
  flex: 2.2;
  width: 100%;
}
.article {
  flex: 2.2;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  background-color: #fff;
  overflow: hidden;
  &-markdown {
    padding: 20px 25px;
    @media screen and (max-width: 768px) {
      padding: 0px 10px;
    }
    .title {
      font-size: 24px;
      @media screen and (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 10px;
      }
      text-align: center;
      color: $fontColor1;
      margin-bottom: 20px;
    }
    .date {
      white-space:nowrap;
      font-size: 14px;
      text-align: center;
      color: $fontColor3;
    }
  }
}
</style>
