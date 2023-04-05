<script setup>
import TodoAdd from './TodoAdd.vue';
import TodoFilter from './TodoFilter.vue';
import TodoSort from './TodoSort.vue';
const emit = defineEmits(['addTodo','sortMethod','filterByStatus'])

</script>
<template>
    <TodoAdd @addTodo="emit('addTodo',$event)"></TodoAdd>
    <TodoFilter @filterByStatus="emit('filterByStatus',$event)"></TodoFilter>
    <TodoSort @sortMethod="emit('sortMethod',$event)"></TodoSort>
</template>
<style scoped lang="scss">
</style>