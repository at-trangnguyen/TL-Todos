<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Feature/>
  </div>
</template>

<script>
  import Feature from './components/features/Feature.vue'

  export default {
    name: 'app',
    components: {
      Feature
    }
  }
</script>

<style lang="scss">
@import "./assets/styles/styles.scss";
</style>
