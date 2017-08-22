<template>
  <div id="index">
    <div class="wrap">
      <transition name="router-fade" mode="out-in"> 
        <router-view />
      </transition> 
      <categories :categories="categories"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Categories from 'components/categories'

export default {
  computed: {
    ...mapGetters([
      'categories'
    ])
  },
  methods: {
    ...mapActions([
      'getCategory'
    ])
  },
  components: {
    Categories
  },
  created () {
    this.getCategory()
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/theme.scss";
.router-fade-enter-active, .router-fade-leave-active {
  transition: all .5s cubic-bezier(.55, 0, .1, 1);
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
  transform: translate3d(0, 30px, 0);
}
.wrap {
  display: flex;
  padding: 14px 0;
  max-width: 1060px;
  width: 95%;
  @media screen and (max-width: 768px) {
    width: 97%;
  }
  margin: 0 auto;
}
</style>
