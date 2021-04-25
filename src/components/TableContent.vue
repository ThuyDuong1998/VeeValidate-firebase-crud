<template>
    <tr>
        <td>{{ item.todo.id }}</td>
        <td>{{ item.todo.name }}</td>
        <td>{{ item.todo.description }}</td>
        <td>{{ item.todo.due_date }}</td>
        <td>{{ item.todo.status }}</td>
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
                this.$store.dispatch('list/deleteTodo', this.item.todo.id)
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
