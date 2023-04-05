<script setup>
import { ref } from "vue";
import { useTodosStore } from '../stores/todoList'
const {sortMethod} = useTodosStore();
const sort = ref("-");
</script>
<template>
      <div>
        <v-select
          label="Sort"
          v-model="sort"
          @update:modelValue="sortMethod(sort)"
          :items="['name', 'completed', 'incompleted']"
        ></v-select>
      </div>
</template>
<style scoped lang="scss">
</style>