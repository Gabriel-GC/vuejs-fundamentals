<template>
    <div class="container__items">
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
    components: { TodoItem }
}
</script>