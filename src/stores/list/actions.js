


export default {
    // async getTodoList({ commit }) {
    //     const result = await http.get(getApi.listTodo.url);
    //     commit('getTodoList', result.data);
    // },
    // async addTodo({ commit }, payload) {
    //     const result = await http.post(getApi.addTodo.url,payload);
    //     commit('addTodo', result.data);
    // },
    // async deleteTodo({ commit }, payload) {
    //     const result = await http.delete(`${getApi.listTodo.url}${payload}`);
    //     commit('deleteTodo', result.data);
    // },
    // async editTodo({ commit }, payload) {
    //     const result = await http.get(`${getApi.listTodo.url}${payload}`);
    //     commit('editTodo', result.data);
    // },
    // async updateTodo({ commit }, payload) {
    //     const result = await http.put(`${getApi.listTodo.url}${payload.id}`, payload);
    //     commit('updateTodo', result.data);
    // },
    getTodoList({commit}) {
        let listTodo = JSON.parse(localStorage.getItem('listTodo')) ? JSON.parse(localStorage.getItem('listTodo')) : [];
        commit('getTodoList', listTodo);
    },
    addTodo({commit}, payload) {
        commit('addTodo', payload)
    },
    deleteTodo({commit}, payload) {
        commit('deleteTodo', payload)
    },
    editTodo({commit}, payload) {
        commit('editTodo', payload)
    },
    updateTodo({commit}, payload) {
        commit('updateTodo', payload)
    }
};
