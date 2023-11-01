// 使用 home 项目里面的组件
<!-- App.vue -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="我是消费方"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    HelloWorld: () => import('home/HelloWorld')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
