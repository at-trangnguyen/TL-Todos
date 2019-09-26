<template>
  <div>
    <p>Feature is works!</p>
    <todo-list/>
  </div>
</template>

<script>
  import TodoList  from './TodoList/TodoList.vue'

  export default {
    name: 'feature',
    components: {
      TodoList
    }
  }
</script>
