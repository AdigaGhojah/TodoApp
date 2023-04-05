<script setup>
import TodoList from "./components/TodoList.vue";
import TodoControls from "./components/TodoControls.vue";
import { onMounted,toRefs,ref } from "vue";
import { useTodosStore } from './stores/todoList'


const { todos, renderedTodos,setTodos,setRenderedTodos } = useTodosStore();
onMounted(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  // console.log(data.slice(0, 5));
  // todos = data.slice(0, 5);
  setTodos(data.slice(0, 5))
  // todos.value = [1,2,3]
  setRenderedTodos();
  // renderedTodos.value = data.slice(0, 5);
  // console.log(todos)
  // debugger;
});

</script>

<template>
  <div class="container">
    <div class="todoContainer">
      <TodoControls></TodoControls>
      <TodoList></TodoList>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;

  .todoContainer {
    flex-direction: column;
    gap: 24px;
    max-width: 100%;
    padding: 8px;
    
  }
}
</style>
