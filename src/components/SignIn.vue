<template>
    <div class="container">
        <div class="imgcontainer">
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar" />
        </div>
        <ValidationObserver v-slot="{ handleSubmit}">
            <form @submit.prevent="handleSubmit(signIn)">
                <label for="uname"><b>Username</b></label>
                <ValidationProvider rules="required|email" v-slot="{ classes, errors }">
                    <div :class="classes">
                        <input type="text" placeholder="Enter Username" v-model="login.email" />
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

                <label> <input type="checkbox" checked="checked" name="remember" /> Remember me </label>
                <button type="submit">Login</button>
                <p>
                    Đăng kí tài khoản?
                    <router-link to="/sign-up">
                        Sign Up
                    </router-link>
                </p>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            login: {
                email: '',
                password: '',
                returnSecureToken: true,
            },
        };
    },
    methods: {
        async signIn() {
            const sign = await axios.post(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7k2fVv7SYXi0NhtLTdSWCcghlWSaVDNQ',
                this.login
            );
            localStorage.setItem('login', sign.data.idToken);
            this.$router.push('/home');
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type='text'],
input[type='password'] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

button {
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

button:hover {
    opacity: 0.8;
}

.cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
}

.imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
}

img.avatar {
    width: 200px;
    border-radius: 50%;
}

.login-form {
    padding: 10px;
}

span.psw {
    float: right;
    padding-top: 16px;
}

@media screen and (max-width: 300px) {
    span.psw {
        display: block;
        float: none;
    }
    .cancelbtn {
        width: 100%;
    }
}
</style>
