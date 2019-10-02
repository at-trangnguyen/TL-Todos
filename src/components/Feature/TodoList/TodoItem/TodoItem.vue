<template>
  <li class="todo-item">
    <div class="todo-info">
      <input :id="todo.id" type="checkbox" class="checkbox" @change="changeStatus(todo.status)" :checked="todo.status === 'completed'">
      <label class="lb-checkbox" :for="todo.id"></label>
      <span class="task-name">{{ todo.task }}</span>
    </div>
    <button class="btn btn-no-style btn-remove">
      <i class="icofont-close"></i>
    </button>
  </li>
</template>

<script>
  export default {
    name: 'todo-item',
    props: ['todo'],
    methods: {
      changeStatus(status) {
        if (status === 'active') {
          this.todo.status = 'completed';
        } else {
          this.todo.status = 'active';
        }
        this.$emit("inputData", this.todo);
      }
    }
  };
</script>
