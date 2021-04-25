export default {
    getTodoList(state, payload) {
        state.listTodo = [...payload];
    },
    addTodo(state, payload) {
        state.listTodo.push({ ...payload });
        localStorage.setItem('listTodo', JSON.stringify(state.listTodo));
    },
    deleteTodo(state, payload) {
        const findID = state.listTodo.findIndex(item => item.id === payload)
        state.listTodo.splice(findID,1)
        localStorage.setItem('listTodo', JSON.stringify(state.listTodo));
    },
    editTodo(state, payload) {
        state.itemEdit = {...payload.listBig}
        state.listSub = [...payload.listSmall]
        console.log(payload.listSmall)
    },
    updateTodo(state, payload) {
        console.log(payload)
        const findID = state.listTodo.findIndex(item => item.todos.id === payload.todos.id)
        const itemUpdate = [...state.listTodo]
        itemUpdate[findID] = {...payload}
        state.listTodo= [...itemUpdate]
        localStorage.setItem('listTodo', JSON.stringify(state.listTodo));
    }, 
}