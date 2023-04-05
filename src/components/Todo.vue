<script setup>
import { useTodosStore } from '../stores/todoList';

  const {deleteTodo,editTodo,toggleStatus} = useTodosStore();
  const props = defineProps(['todo'])
  // const emit = defineEmits(['deleteTodo', 'editTodo','toggleStatus'])
</script>



<template>
    <li  :key="todo" class="todo">
          <p
            :contenteditable="todo.isEditable"
            class="todoTitle"
            :class="{
              isCompleted: todo.completed,
              isEditable: todo.isEditable,
            }"
          >
            {{ todo.title }}
          </p>
          <div class="todoButtons">
            <v-btn variant="outlined" @click="deleteTodo(todo)">delete</v-btn>
            <v-btn variant="outlined" @click="editTodo(todo)">edit</v-btn>
            <v-btn variant="outlined" @click="toggleStatus(todo)"
              >toggle Status</v-btn
            >
          </div>
        </li>
</template>

<style scoped lang="scss">
   .todo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        border:1px solid #ccc;
        padding:8px;
        border-radius: 8px;
        .todoButtons {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        @media (max-width: 768px) {
        & {
          gap: 8px;
          flex-direction: column;
          align-items: flex-start;
        }
      }
      .isCompleted {
        text-decoration: line-through;
      }
      .isEditable {
        border: 1px solid black;
      }
      }
</style>