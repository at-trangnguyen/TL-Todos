<template>
  <div class="todo-list-wrapper">
    <form class="form-todo">
      <div class="form-group">
        <input class="add-task-input" type="text" placeholder="Add task...">
        <button class="btn btn-primary btn-add">
          <i class="icofont-plus"></i>
        </button>
      </div>
    </form>
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
