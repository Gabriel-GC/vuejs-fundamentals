<template>
      <div>
      <pre>
        {{ $store.state.todos }}
      </pre>
        <div>
            <TodoSpinner v-if="loading" />
            <template v-else>
                <TodoFormAdd/>
                <TodoItems/>
                <TodoEmpty/>
            </template>
        </div>
    </div>
</template>

<script>
import TodoItems from './components/TodoItems.vue';
import TodoSpinner from './components/TodoSpinner.vue';
import TodoFormAdd from './components/TodoFormAdd.vue';
import TodoEmpty from './components/TodoEmpty.vue';
import axios from 'axios';

export default {
    name: 'App',
    components: { TodoEmpty, TodoItems, TodoFormAdd, TodoSpinner },
    
    data() {
        return {
            loading: false
        }
    },

    created() {
        axios.get ('http://localhost:3000/todos')
        .then((response) => {
            this.$store.commit('storeTodos', response.data)
        })
    },
}

</script>
