<template>
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
  </div>
</template>

<script>
  export default {
    name: 'todo-filter'
  };
</script>
