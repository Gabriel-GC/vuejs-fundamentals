import { createStore } from "vuex";

export default createStore({
        state: {
            todos: []
        },
        mutations: {
            storeTodos(state, payload) {
                state.todos = payload
            }
        },
        getters: {
            
        },
        actions: {
            
        },
        modules: {
            
        }
})

// import { createApp } from 'vue'
// import { createStore } from 'vuex'

// // Create a new store instance.
// const store = createStore({
//     options : {
//         state: {
//             todos: []
//         },
//         getters: {
//             storeTodos(state, payload) {
//                 state.todos = payload
//             }
//         },
//         mutations: {
            
//         },
//         actions: {
            
//         },
//         modules: {
            
//         }
// }})

// const app = createApp({ /* your root component */ })

// // Install the store instance as a plugin
// app.use(store)