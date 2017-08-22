<template>
  <div class="loading">
    <div class="inner">
      <div class="loading-title"></div>
      <div class="loading-title__right"></div>
      <div class="loading-title"></div>
      <div class="loading-ind"></div>
      <div class="loading-ind__left"></div>
      <div class="loading-ind__line"></div>
      <div class="loading-ind__right"></div>
      <div class="loading-ind__line"></div>
      <div class="loading-date"></div>
      <div class="loading-date__left"></div>
      <div class="loading-date"></div>
      <div class="loading-category"></div>
      <div class="loading-bottom"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  div[class^="loading"] {
    background: #fff;
  }
  .loading {
    border-radius: 4px;
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
      padding: 0px 15px;
      height: 225px;
    }
    height: 290px;
    padding: 20px 25px;
    overflow: hidden;
    font-size: 23px;
    display: flex;
    flex: 2.2;
    .inner {
      flex: 1;
      background: #ebeff1;
      background: linear-gradient(90deg,#ebeff1 8%,#dee3e5 18%,#ebeff1 33%);
      animation: placeHolderShimmer 1s linear infinite forwards;
      background-size: 960px 4px;
    }
    &-title {
      height: 20.8px;
      &__right {
        height: 26px;
        margin-left: 120px;
      }
    }
    &-ind {
      @media screen and (max-width: 768px) {
        height: 7px;
      }
      height: 16px;
      &__left {
        width: 40px;
        height: 24px;
      }
      &__line {
        height: 8px;
      }
      &__right {
        margin-left: 60%;
        height: 24px;
      }
    }
    &-date {
      @media screen and (max-width: 768px) {
        height: 7px;
      }
      height: 16px;
      &__left {
        width: 75%;
        height: 24px;
      }
    }
    &-category {
      margin-left: 120px;
      height: 24px;
    }
    &-bottom {
      height: 32px;
    }
  }
  @keyframes placeHolderShimmer {
    0% {
        background-position: -468px 0;
    }
    to {
        background-position: 468px 0;
    }
  }
</style>

