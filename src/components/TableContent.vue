<template>
    <tr>
        <td>{{ item.todos.id }}</td>
        <td>{{ item.todos.name }}</td>
        <td>{{ item.todos.description }}</td>
        <td>{{ item.todos.due_date }}</td>
        <td>{{ item.todos.status }}</td>
        <td>
            <button class="btn-del" @click="clickDel">Delete</button>
        </td>
        <td>
            <router-link to="/edit">
                <button class="btn-del" @click="clickEdit">Edit</button>
            </router-link>
        </td>
        <td></td>
    </tr>
</template>

<script>
export default {
    props: {
        item: Object,
    },
    methods: {
        clickDel() {
            const del = confirm('Do you want delete?')
            if(del){
                this.$store.dispatch('list/deleteTodo', this.item.todos.id)
            }
        },
        clickEdit(){
            this.$store.commit('list/editTodo', {
                listBig: {...this.item.todos},
                listSmall: [...this.item.subtask]
            })
        }
    },
};
</script>

<style></style>
