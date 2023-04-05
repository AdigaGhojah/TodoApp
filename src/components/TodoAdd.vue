<script setup>
import { ref } from "vue";
import { useTodosStore } from '../stores/todoList';

const {addTodo} = useTodosStore();
const addTodoInput = ref("");
</script>
<template>
    <div class="addTodoContainer">
        <v-text-field v-model="addTodoInput" label="Add Todo"></v-text-field>
        <v-btn variant="outlined" @click="addTodo(addTodoInput)">add</v-btn>
      </div>
</template>
<style scoped lang="scss">
.addTodoContainer {
      display: flex;
      gap: 16px;
    }
</style>