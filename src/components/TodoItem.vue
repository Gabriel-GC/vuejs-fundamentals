<template>
    <div>
        <div>
            <div>
                <button>
                    <!-- svg check-->
                </button>
            </div>
                <div>
                    <input
                        type="text"
                        placeholder="Digite a sua tarefa"
                        :value="todo.title"
                        @keyup.enter="updateTodo"
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
            default: () => ([]),
        }
    },

    methods: {
        updateTodo(e) {
            const newTitle = e.target.value
            
            if (!newTitle) {
                return;
            }

            const payload = {
                id: this.todo.id,


                data:{
                    title: newTitle,
                    completed: this.todo.completed
                }
            }
            this.$store.dispatch('updateTodo', payload)
        },
    }
}

</script>