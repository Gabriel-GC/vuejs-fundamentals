<template>
        <div class="container">
            <TodoSpinner v-if="loading" />
            <template v-else>
                <TodoFormAdd/>
                <TodoItems
                    v-if="$store.state.todos.length"
                />
                <TodoEmpty
                    v-else
                />
            </template>
        </div>
</template>

<script>
import TodoItems from './components/TodoItems.vue';
import TodoSpinner from './components/TodoSpinner.vue';
import TodoFormAdd from './components/TodoFormAdd.vue';
import TodoEmpty from './components/TodoEmpty.vue';

export default {
    name: 'App',
    components: { TodoEmpty, TodoItems, TodoFormAdd, TodoSpinner },
    
    data() {
        return {
            loading: false
        }
    },

    created() {
        this.loading = true
        this.$store.dispatch('getTodos').finally(()=> {
            this.loading = false
        })
    },
}

</script>
