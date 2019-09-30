<template>
  <div class="todo-list-wrapper">
    <form class="form-todo">
      <div class="form-group">
        <input class="add-task-input" type="text" placeholder="What needs to be done?">
        <button class="btn btn-primary btn-add">
          <i class="icofont-plus"></i>
        </button>
      </div>
    </form>
    <div class="todo-container">
      <ul class="tabs">
        <li class="tab-item">
          <a class="active" href="#">All tasks</a>
        </li>
        <li class="tab-item">
          <a href="#">Active</a>
        </li>
        <li class="tab-item">
          <a href="#">Complete</a>
        </li>
      </ul>
      <todo-item/>
    </div>
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
