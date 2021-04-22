<template>
<ValidationObserver v-slot="{ handleSubmit, reset }">
    <form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="reset">
        <div class="container sign-in">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />

            <label for="email"><b>Email</b></label>
            <ValidationProvider rules="required|email" v-slot="{ classes, errors }">
                <div :class="classes">
                    <input type="text" placeholder="Enter Email" v-model="login.email" />
                    <span>
                        {{ errors[0] }}
                    </span>
                </div>
            </ValidationProvider>

            <label for="psw"><b>Password</b></label>
            <ValidationProvider rules="alpha_dash|psw" v-slot="{ classes, errors }">
                <div :class="classes">
                    <input type="password" placeholder="Enter Password" v-model="login.password" />
                    <span>
                        {{ errors[0] }}
                    </span>
                </div>
            </ValidationProvider>

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" v-model="login.repeatPass" />

            <label> <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px" /> Remember me </label>

            <div class="clearfix">
                <button type="reset" class="cancelbtn">Cancel</button>
                <button type="submit" class="signupbtn">Sign Up</button>
            </div>
        </div>
    </form>
</ValidationObserver>
</template>

<script>
// import firebase from 'firebase/app';
import axios from 'axios';
export default {
    data() {
        return {
            login: {
                email: '',
                password: '',
                repeatPass: '',
                returnSecureToken: true,
            },
        };
    },
    methods: {
        async onSubmit() {
            if (this.login.password === this.login.repeatPass) {
                await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7k2fVv7SYXi0NhtLTdSWCcghlWSaVDNQ', {
                    ...this.login,
                });
                this.$router.push('/');
            } else {
                alert('Confirm password');
                if (alert) {
                    (this.login.password = ''), (this.login.repeatPass = '');
                }
            }
        },
    },
};
</script>

<style scoped>
* {
    box-sizing: border-box;
}

input[type='text'],
input[type='password'] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
}

input[type='text']:focus,
input[type='password']:focus {
    background-color: #ddd;
    outline: none;
}

hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
}

button {
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
}

button:hover {
    opacity: 1;
}
.cancelbtn {
    padding: 14px 20px;
    background-color: #f44336;
}

.cancelbtn,
.signupbtn {
    float: left;
    width: 50%;
}

.container .sign-in {
    padding: 10px;
}

.clearfix::after {
    content: '';
    clear: both;
    display: table;
}

@media screen and (max-width: 300px) {
    .cancelbtn,
    .signupbtn {
        width: 100%;
    }
}
</style>
