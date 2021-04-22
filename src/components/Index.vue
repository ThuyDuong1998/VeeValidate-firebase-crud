<template>
    <div>
        <div class="login_top">
        </div>
        <div class="topnav" id="myTopnav">
            <a href="#home" class="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
        </div>
        <div class="container">
            <h1 style="text-align: center">TABLE</h1>
            <div style="display: flex; justify-content: flex-end;">
                <router-link to="/add">
                    <button type="button" class="btn btn-light">
                        Add
                    </button>
                </router-link>
            </div>
            <table class="table table-striped" id="userdata" border="1">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th></th>
                        <th></th>
                        <th>
                            <input type="checkbox" id="checkAll" />
                        </th>
                    </tr>
                </thead>
                <tbody id="tbody-id">
                    <TableContent v-for="item in todos" :key="item.id" :item="item" />
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import TableContent from './TableContent'
import {mapGetters} from 'vuex'
export default {
    components: {
        TableContent,
    },
    computed: {
        ...mapGetters({todos: 'list/listTodo'})
    },
    mounted(){
        this.$store.dispatch('list/getTodoList')
    }
};
</script>

<style scoped>
.login_top {
    display: flex;
    justify-content: flex-end;
    margin: 10px;
}
.login_top a {
    margin-right: 10px;
}
.topnav {
    background-color: #333;
    overflow: hidden;
}

.topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

.topnav a:hover {
    background-color: #ddd;
    color: black;
}

.topnav a.active {
    background-color: #4caf50;
    color: white;
}

.topnav .icon {
    display: none;
}
</style>
