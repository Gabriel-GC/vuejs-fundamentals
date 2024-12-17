<template>
      <div>
        <div>
           <TodoSpinner/>
            <TodoFormAdd/>
            <TodoItems/>
            <TodoEmpty/>
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
    name: "App",
    components: { TodoEmpty, TodoFormAdd, TodoItems, TodoSpinner },

    data(){
        return {
            todos: []
        }
    },

    created() {
        axios.get ('http://localhost:3000/todos')
        .then((response) => {
            this.todos = response.data;
        })
    },
}

</script>
