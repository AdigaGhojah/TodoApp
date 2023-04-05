<script setup>
import Todo from "./Todo.vue";
import { useTodosStore } from '../stores/todoList'
import { storeToRefs } from 'pinia'
// const store = useTodosStore()
// const { renderedTodos } = storeToRefs(store);
const {renderedTodos} = useTodosStore()
console.log(renderedTodos.value);
// const emit = defineEmits(['deleteTodo', 'editTodo','toggleStatus'])
</script>

<template>
  {{ renderedTodos }}
  <TransitionGroup name="list" tag="ul" in-out>
    <Todo
      v-for="todo in renderedTodos.value"
      :key="todo"
      :todo="todo"
    ></Todo>
  </TransitionGroup>
</template>

<style scoped lang="scss">
ul {
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    & {
      gap: 24px;
    }
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
