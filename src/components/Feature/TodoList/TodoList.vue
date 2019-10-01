<template>
  <div class="todo-list-wrapper">
    <form-add-todo/>
    <todo-filter/>
    <todo-item/>
  </div>
</template>

<script>
  import TodoItem from './TodoItem/TodoItem';
  import TodoFilter from './TodoFilter/TodoFilter';
  import FormAddTodo from './FormAddTodo/FormAddTodo';
  export default {
    name: 'todo-list',
    components: {
      TodoFilter,
      FormAddTodo,
      TodoItem
    }
  };
</script>
