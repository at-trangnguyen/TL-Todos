<template>
  <div class="todo-item-wrapper">
    <div class="todo-info">
      <input id="checkbox" type="checkbox" class="checkbox">
      <label class="lb-checkbox" for="checkbox"></label>
      <span class="task-name">Create Todo</span>
    </div>
    <button class="btn btn-no-style btn-remove">
      <i class="icofont-close"></i>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'todo-item'
  };
</script>
