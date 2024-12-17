<script setup>
import TodoItems from './components/TodoItems.vue';
import TodoSpinner from './components/TodoSpinner.vue';
import TodoFormAdd from './components/TodoFormAdd.vue';
import TodoEmpty from './components/TodoEmpty.vue';

</script>

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

