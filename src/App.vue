<template>
  <div id="app">
    <login/>
  </div>
</template>

<script>
  import Login from './components/Feature/Login.vue';

  export default {
    name: 'app',
    components: {
      Login
    }
  };
</script>

<style lang="scss">
  @import "./assets/icofont/icofont.min.css";
  @import "./assets/styles/styles.scss";
</style>
