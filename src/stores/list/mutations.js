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
    },
    editTodo(state, payload) {
        state.itemEdit = {...payload.listBig}
        state.listSub = [...payload.listSmall]
        console.log(payload.listSmall)
    },
    updateTodo(state, payload) {
        const findID = state.listTodo.findIndex(item => item.id === payload.id)
        const itemUpdate = [...state.listTodo]
        itemUpdate[findID] = {...payload}
        state.listTodo= [...itemUpdate]
        localStorage.setItem('listTodo', JSON.stringify(state.listTodo));
    }, 
}