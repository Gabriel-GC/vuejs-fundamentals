<template>
    <div>
        <div>
            <div>
                <button
                :class="{
                    'checked': isCompleted,
                    'unchecked': !isCompleted,
                }"
                @click="onCheckClick"
                style="background-color: blue;"

                >
                    <!-- svg check-->
                </button>
            </div>
                <div>
                    <input
                        v-model="title"
                        type="text"
                        placeholder="Digite a sua tarefa"
                        @keyup.enter="onTitleChange"
                    >
                </div>
                <div>
                    <button>
                        <!-- icon trash-->
                    </button>
                </div>
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
        }
    }
}

</script>