<template>
  <div id="sideNav">
    <div class="side-menu" :class="{ active: sideMenuToggle }">
      <div class="side-menu__mask" @click="toggleMenu"></div>
      <div class="side-menu__wrap">
        <div class="user">
          <img src="../assets/tx.jpg" class="user__avatar">
          <p class="user__name">xmxmxm</p>
        </div>
        <nav class="nav" @click="toggleMenu">
          <router-link :to="{ path: '/' }">
            <i class="nav__icon">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-home"></use>
              </svg>
            </i>
            <span class="nav__text">主页</span>
          </router-link>
          <!-- <router-link :to="{ path: '/' }">
            <i class="nav__icon">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-huo"></use>
              </svg>
            </i>
            <span class="nav__text">热门</span>
          </router-link>
          <router-link :to="{ path: '/' }">
            <i class="nav__icon">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-workbench_fill"></use>
              </svg>
            </i>
            <span class="nav__text">归档</span>
          </router-link>
          <router-link :to="{ path: '/' }">
            <i class="nav__icon">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fenlei"></use>
              </svg>
            </i>
            <span class="nav__text">分类</span>
          </router-link>
          <router-link :to="{ path: '/' }">
            <i class="nav__icon">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-guanyu"></use>
              </svg>
            </i>
            <span class="nav__text">关于</span>
          </router-link>  -->
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    toggleMenu () {
      this.$store.commit('SIDE_MENU_TOGGLE')
    }
  },
  computed: {
    ...mapState([
      'sideMenuToggle'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/theme.scss";
.side-menu {
  &__mask {
    position: fixed;
    top: 0;
    transform: translate3d(0px, -100%, 0px);
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: #222;
    transition: transform 0s ease .35s, opacity .35s ease;
  }
  &__wrap {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 55%;
    max-width: 270px;
    transform: translate3d(-110%, 0, 0px);
    z-index: 999;
    background-color: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    transition: .3s cubic-bezier(.37,.15,.32,.94);
  }
  &.active {
    .side-menu {
      &__mask {
        transform: translate3d(0, 0, 0);
        opacity: .3;
        transition: transform 0s ease 0s, opacity .35s ease;
        z-index: 998;
      }
      &__wrap {
        transform: translate3d(0, 0, 0);
      }
    }
  }
}
.user {
  padding-top: 33%;
  padding-bottom: 10%;
  background: linear-gradient(20deg, transparent 47%, #DDE5F9 0);
  &__avatar {
    display: block;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
  }
  &__name {
    font-size: 1.2em;
    text-align: center;
  }
}
.nav {
  margin-top: 12%;
  &>a {
    display: block;
    padding-left: 18%;
    height: 3em;
    line-height: 3em;
    cursor: pointer;
    text-decoration: none;
    color: $fontColor1;
    &:hover {
      background-color: #e5e5e5;
      color: $blue;
    }
  }
  &__icon {
    font-size: 1em;
  }
  &__text {
    margin-left: 18%;
    letter-spacing: 0.4em;
    font-size: 1.1em;
    vertical-align: middle;
  }
}
</style>
