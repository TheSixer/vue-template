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
@import '~vux/src/styles/reset.less';
@import './styles/main.less';

body {
  background-color: #F2F2F2;
  #app {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
}
</style>
