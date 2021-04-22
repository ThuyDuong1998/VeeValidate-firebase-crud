import { extend } from 'vee-validate';
import { required, alpha, alpha_dash, email } from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: "Don't empty",
});

extend('alpha', {
    ...alpha,
    message: "Not alpha",
});

extend('alpha_dash', {
    ...alpha_dash,
    message: "Don't contain special characters",
});

extend('email', {
    ...email,
    message: "Not email",
});

extend('psw', {
    validate(value) {
        return value.length >= 6
    },
    message: "More than 6 characters"
});

