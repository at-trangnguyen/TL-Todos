<template>
  <div id="app">
    <feature/>
  </div>
</template>

<script>
  import Feature from './components/Feature/Feature.vue';

  export default {
    name: 'app',
    components: {
      Feature
    }
  };
</script>

<style lang="scss">
  @import "./assets/icofont/icofont.min.css";
  @import "./assets/styles/styles.scss";
</style>
