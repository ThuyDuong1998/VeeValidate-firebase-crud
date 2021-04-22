import axios from 'axios';

export const getApi = {
    listTodo: {
        method: 'GET',
        url: '/api/v1/tasks/',
    },
    addTodo: {
        method: 'POST',
        url: '/api/v1/tasks/',
    },
    deleteTodo: {
        method: 'DELTETE',
        url: '/api/v1/tasks/',
    },
    updateTodo: {
        method: 'PUT',
        url: '/api/v1/tasks/',
    },
    listSub: {
        method: 'GET',
        url: '/api/v1/tasks/',
    }
};
const http = axios.create({
    baseURL: `https://604661b3f0c6dc00177b1d2c.mockapi.io`,
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
    },
});

export default http;