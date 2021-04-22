<template>
    <div class="container">
        <h1 style="text-align: center">FORM ADD</h1>
        <router-link to="/home">
            <button type="button" class="btn btn-light">
                Back
            </button>
        </router-link>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)">
                <table class="table table-striped" border="1">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <ValidationProvider rules="required|alpha" v-slot="{ classes, errors }">
                                    <div :class="classes">
                                        <input type="text" class="myInput" v-model="list.name" /><br />
                                        <span>
                                            {{ errors[0] }}
                                        </span>
                                    </div>
                                </ValidationProvider>
                            </td>
                            <td>
                                <ValidationProvider rules="required|alpha_dash" v-slot="{ classes, errors }">
                                    <div :class="classes">
                                        <input type="text" class="myInput" name="desIp" v-model="list.description" /><br />
                                        <span>
                                            {{ errors[0] }}
                                        </span>
                                    </div>
                                </ValidationProvider>
                            </td>
                            <td>
                                <input type="date" class="myInput" name="dateIp" v-model="list.due_date" />
                            </td>
                            <td>
                                <ValidationProvider rules="required|alpha_dash" v-slot="{ classes, errors }" name="Name">
                                    <div :class="classes">
                                        <input type="text" class="myInput" v-model="list.status" /><br />
                                        <span>
                                            {{ errors[0] }}
                                        </span>
                                    </div>
                                </ValidationProvider>
                            </td>
                        </tr>
                        <!-- <router-view></router-view> -->
                    </tbody>
                </table>
                <div class="form-add">
                    <span> ADD </span>
                    <button type="button" class="btn btn-danger" @click="addRow">+</button>
                </div>
                <div class="form-add" v-for="(item, index) in subtask" :key="index">
                    <input type="text" class="form-control" placeholder="Name" v-model="item.fullName" />
                    <input class="form-control" type="date" v-model="item.date" />
                    <button type="button" class="btn btn-primary" @click="removeRow">-</button>
                </div>

                <div style="display: flex; justify-content: center; margin-top: 40px">
                    <button type="submit" class="btn btn-primary">
                        Save
                    </button>
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
const sub = {
    fullName: '',
    date: '',
};
export default {
    data() {
        return {
            list: {
                id: '',
                name: '',
                description: '',
                due_date: '',
                status: '',
            },
            subtask: [{ ...sub }],
        };
    },
    computed: {
        ...mapGetters({ todos: 'list/listTodo' }),
        findIDMax() {
            const newID = Math.max.apply(
                Math,
                this.todos.map((item) => item.id === this.todos.id)
            );
            return this.todos.length ? newID : 0;
        },
        ...mapGetters({ edit: 'list/itemEdit', listSub: 'list/listSub' })
    },
    methods: {
        clearInput() {
            (this.list.name = ''), (this.list.description = ''), (this.list.due_date = ''), (this.list.status = '');
        },
        onSubmit() {
            if (!this.list.id) {
                this.list.id = this.findIDMax + 1;
                this.$store.dispatch('list/addTodo', {
                    todos: { ...this.list },
                    subtask: [...this.subtask],
                });
                this.clearInput();
                this.$router.push('/home');
            } else {
                this.$store.dispatch('list/updateTodo', {...this.list});
                this.clearInput();
                this.$router.push('/home');
            }
        },
        addRow() {
            this.subtask.push({
                fullName: '',
                date: '',
            });
        },
        removeRow(index) {
            this.subtask.splice(index, 1);
        },
    },
    mounted() {
        if (this.$route.name === 'edit') {
            this.list = { ...this.edit }
            this.subtask = [...this.listSub]
        }
    },
};
</script>

<style>
.invalid {
    color: red;
}
</style>
