<template>
  <div id="app">
    <comHeader />
    <comSideNav />
    <router-view />
  </div>
</template>

<script>
// import 'normalize.css'
import comHeader from 'components/comHeader'
import comSideNav from 'components/comSideNav'
export default {
  components: {
    comHeader,
    comSideNav
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "Roboto Mono";
  src: local("Roboto Mono"), url("assets/fonts/RobotoMono-Regular.ttf");
}
body {
  background-color: #ebeff1;
  overflow-y: scroll;
  // font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  font-family: 'Roboto Mono', Monaco, courier, monospace;
  margin: 0;
  -webkit-overflow-scrolling: touch;
  // color: #34495e;
}
html {
  font-size: 100%;
  color: #3b4a51;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  // font: normal 1em Roboto,'Helvetica Neue',Helvetica,Arial,'Microsoft Yahei',sans-serif;
}
input {
  border-radius: 0;
  outline: 0;
  padding-left: .4em;
}
.icon {
  width: 1.6em;
  height: 1.6em;
  vertical-align: middle;
  fill: currentColor;
}
</style>
