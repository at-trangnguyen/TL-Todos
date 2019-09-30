<template>
  <div class="page-wrapper">
    <div class="logo-wrapper">
      <img class="logo-image" src="../../assets/images/logo_icon.png" alt="logo">
      <h1 class="page-title">Todoist</h1>
    </div>
    <todo-list/>
  </div>
</template>

<script>
  import TodoList  from './TodoList/TodoList.vue';

  export default {
    name: 'feature',
    components: {
      TodoList
    }
  };
</script>
