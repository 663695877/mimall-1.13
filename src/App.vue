<template>
  <div id="app">
    <router-view></router-view>
    {{res}}
  </div>
</template>

<script>
import storage from './storage/index';

export default {
  name: 'app',
  data () {
    return {
      res: {}
    }
  },
  mounted () {
    // storage.setItem('a',1);
    // storage.setItem('abc', {a:1},'user');
    storage.clear('a')
    this.axios.get('/user/login').then((res) => {
      this.res = res
    })
  },
  components: {
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
