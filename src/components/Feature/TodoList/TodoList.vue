<template>
  <div class="todo-list-wrapper">
    <p>TodoList is works!</p>
    <todo-item/>
  </div>
</template>

<script>
  import TodoItem from './TodoItem/TodoItem.vue';

  export default {
    name: 'todo-list',
    components: {
      TodoItem
    }
  };
</script>
