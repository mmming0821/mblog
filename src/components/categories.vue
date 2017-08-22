<template>
  <nav class="category">
    <div class="category-container">
      <div class="category-row" :key="item.id" v-for="item in categories" @click="getList(item.id)">
        <i class="category-row__icon">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-biaoqian"></use>
          </svg>
        </i>
        <div class="category-row__content">
          <b class="category-row__text">{{ item.tag }}</b>
          <div class="category-row__total">共有{{ item.total }}篇</div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    categories: Array
  },
  methods: {
    ...mapActions([
      'getArticleList'
    ]),
    getList (id) {
      this.$router.push({ name: 'articles', params: { categoryId: id } })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/theme.scss";
.category {
  box-sizing: border-box;
  flex: 1;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @at-root &-container {
    padding: 1em 0;
    border-radius: 4px;
    margin-left: 20px;
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    transition: all .15s ease-in-out;
    &:hover {
      box-shadow: 0 4px 20px 0 rgba(168,182,191,.6);
    }
  }
  @at-root &-row {
    padding: 0.8em 0;
    display: flex;
    padding-left: 15%;
    align-items: center;
    cursor: pointer;
    transition: .2s ease;
    &:hover .category-row__icon {
      color: $red;
    }
    @at-root &__icon {
      margin-right: 1em;
      transition: .2s ease;
    }
    @at-root &__text {
      display: inline-block;
      margin-bottom: 0.3em;
      font-size: 1.1em;
      transition: .2s ease;
    }
    @at-root &__total {
      color: #686E88;
      font-size: 0.9em;
    }
  }
}
</style>
