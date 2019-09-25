<template>
  <div>
    <p>TodoList is works!</p>
    <TodoItem/>
  </div>
</template>

<script>
  import TodoItem  from './todo-item/TodoItem.vue'
  export default {
    name: 'todo-item',
    components: {
      TodoItem
    }
  }
</script>
