<template>
  <div id="app">
    <feature/>
  </div>
</template>

<script>
  import Feature from './components/Features/Feature.vue'

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
