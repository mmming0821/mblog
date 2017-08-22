<template>
  <div id="header">
    <div class="menu-btn" @click="toggleMenu">
      <div class="menu-line" :class="{ active: sideMenuToggle }"></div>
    </div>
    <header class="header">
      <div class="header-menu">
        <!-- <div class="header-menu__search" :class="{ active: searchActive }">
          <input type="text" class="header-menu__input" placeholder="请输入感兴趣的关键字">
          <svg class="icon header-menu__magnifying" aria-hidden="true" @click="toggleSearch">
            <use xlink:href="#icon-01magnifyingglass"></use>
          </svg>
        </div> -->
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      searchActive: false
    }
  },
  computed: {
    ...mapState([
      'sideMenuToggle'
    ])
  },
  methods: {
    toggleMenu () {
      this.$store.commit('SIDE_MENU_TOGGLE')
    },
    toggleSearch () {
      this.searchActive = !this.searchActive
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/theme.scss";
#header {
  height: 53px;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding: 0 2em;
  width: 100%;
  height: 3.3em;
  background-color: #fff;
  box-shadow: 0 1px 10px 0 rgba(0, 34, 77, .05);
  z-index: 998;
  @at-root &-menu {
    @at-root &__search {
      padding-bottom: 1px;
      border-bottom: 2px solid transparent;
      transition: .3s ease;
      letter-spacing: -3px;
      &.active {
        border-bottom: 2px solid $mainColor;
        .header-menu__input {
          width: 10em;
        }
      }
    }
    @at-root &__magnifying {
      font-size: 1em;
      color: $mainColor;
      cursor: pointer;
    }
    @at-root &__input {
      width: 0;
      border: 0;
      font-size: 0.9em;
      transition: .2s ease;
    }
  }
}

.menu-btn {
  position: fixed;
  left: 2em;
  top: 0.9em;
  width: 25px;
  height: 25px;
  z-index: 9999;
  cursor: pointer;
  @at-root .menu-line {
    position: relative;
    top: 11px;
    width: 25px;
    height: 3px;
    background-color: $mainColor;
    transition: .3s ease;
    &:before {
      position: absolute;
      top: -8px;
      content: ' ';
      width: 25px;
      height: 3px;
      background-color: $mainColor;
      transition: .3s ease;
    }
    &:after {
      position: absolute;
      top: 8px;
      content: ' ';
      width: 25px;
      height: 3px;
      background-color: $mainColor;
      transition: .3s ease;
    }
    &.active {
      width: 0;
      &:before {
        transform: translateY(8px) rotate(45deg);
      }
      &:after {
        transform: translateY(-8px) rotate(-45deg);
      }
    }
  }
}
</style>
