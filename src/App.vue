<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import 'styles/main.css';
@import '~vux/src/styles/reset.less';
@import 'swiper/dist/css/swiper.css';

body {
  background-color: rgba(229,229,229,1);
  #app {
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
  }
}
</style>
