<template>
        <div class="container__item">
            <div class="content__item">
                <button
                :class="{
                    'checked': isCompleted,
                    'unchecked': !isCompleted,
                }"
                @click="onCheckClick"
                >

                </button>
                <input
                    class="item"
                    v-model="title"
                    type="text"
                    placeholder="Digite a sua tarefa"
                    @keyup.enter="onTitleChange"
                >
                <button
                class="btn__trash"
                @click="onDelete"
                >
                </button>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            default: () => ({}),
        }
    },

    data() {
        return {
            title: this.todo.title,
            isCompleted: this.todo.completed,
        }
    },

    methods: {
        updateTodo() {
            const payload = {
                id: this.todo.id,
                data:{
                    title: this.title,
                    completed: this.isCompleted
                }
            }
            this.$store.dispatch('updateTodo', payload)
        },

        onTitleChange() {
            if (!this.title) {
                return;
            }

            this.updateTodo()
        },

        onCheckClick() {
            this.isCompleted = !this.isCompleted
            this.updateTodo()
        },

        onDelete() {
            this.$store.dispatch('deleteTodo', this.todo.id)
        }
    }
}

</script>