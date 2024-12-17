<template>
    <form @submit.stop.prevent="addTodo" class="form__container">
                <input
                    v-model= "title"
                    placeholder="Adicione um novo item ..."
                    type="text" 
                    class="content__input"
                    >
                <button
                    type="submit"
                    class="btn__input"
                >
                    ADICIONAR
                </button>
            </form>
</template>

<script>
export default {
    data(){
        return {
            title: ''
        }
    },
    methods: {
        addTodo() {
            if (!this.title) {
                return false;
            }
            this.$store.dispatch('addTodo', {
                title: this.title,
                completed: false
            })
        }
    }
}

</script>