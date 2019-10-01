<template>
  <div class="page-wrapper">
    <todo-header/>
    <todo-list/>
  </div>
</template>

<script>
  import TodoHeader from '../ComponentGlobal/TodoHeader'
  import TodoList from './TodoList/TodoList';

  export default {
    name: 'feature',
    components: {
      TodoHeader,
      TodoList
    }
  };
</script>
