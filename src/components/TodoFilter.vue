<script setup>
import { ref } from "vue";
import { useTodosStore } from '../stores/todoList'
const {filterByStatus} = useTodosStore();
const filter = ref("all");
</script>
<template>
      <div>
        <v-select
          label="Filter"
          v-model="filter"
          @update:modelValue="filterByStatus(filter)"
          :items="['all', 'incompleted', 'completed']"
        ></v-select>
      </div>
</template>
<style scoped lang="scss">
</style>