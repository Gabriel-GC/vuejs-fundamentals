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
                        readonly
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
    }
}

</script>