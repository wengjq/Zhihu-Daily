<template>
  <div id="app">
    <ZhihuDailyHead></ZhihuDailyHead>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import ZhihuDailyHead from './components/ZhihuDailyHead'
require('basscss/css/basscss.min.css')

export default {
  name: 'app',
  components: {
    ZhihuDailyHead
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
