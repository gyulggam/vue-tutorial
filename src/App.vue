<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <CreateComponents />
    <UseDataSample />
    <ParentsSample />
    <InputBind />
    <Lifecycle />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CreateComponents from './components/CreateComponents.vue'
import UseDataSample from './components/UseDataSample.vue'
import ParentsSample from './components/props/Parents.vue'
import InputBind from './components/bind/Bind.vue'
import Lifecycle from './components/lifecycle/Lifecycle.vue'

export default {
    name: 'App',
    components: {
        HelloWorld,
        CreateComponents,
        UseDataSample,
        ParentsSample,
        InputBind,
        Lifecycle,
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
