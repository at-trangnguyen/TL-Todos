<template>
  <div class="todo-list-wrapper">
    <form-add-todo/>
    <todo-filter/>
    <ul class="todos">
      <li class="todo-item">
        <todo-item/>
      </li>
    </ul>
  </div>
</template>

<script>
  import FormAddTodo from './FormAddTodo/FormAddTodo';
  import TodoFilter from './TodoFilter/TodoFilter';
  import TodoItem from './TodoItem/TodoItem';
  export default {
    name: 'todo-list',
    components: {
      FormAddTodo,
      TodoFilter,
      TodoItem
    }
  };
</script>
