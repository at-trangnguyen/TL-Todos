<template>
  <div class="todo-list-wrapper">
    <form-add-todo/>
    <todo-filter/>
    <ul class="todos">
      <todo-item v-for="(todo, index) in todos" :key="index" :todo="todo" @inputData="updateTodo"/>
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
    },
    data() {
      return {
        todos: [
          {
            id: 1,
            task: 'Create Todo PWA with Vue',
            status: 'active'
          },
          {
            id: 2,
            task: 'Configure Progressive Web App',
            status: 'completed'
          },
          {
            id: 3,
            task: 'Configure webpack',
            status: 'active'
          }
        ]
      }
    },
    methods: {
      updateTodo(todo) {
        for (let i = 0; i < this.todos.length; i++) {
          if (this.todos[i].id === todo.id) {
            this.todos[i].task = todo.task;
          }
        }
      }
    }
  };
</script>
