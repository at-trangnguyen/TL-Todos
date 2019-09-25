<template>
  <div>
    <p>Feature is works!</p>
    <TodoList/>
  </div>
</template>

<script>
  import TodoList  from './todo-list/TodoList.vue'

  export default {
    name: 'feature',
    components: {
      TodoList
    }
  }
</script>
