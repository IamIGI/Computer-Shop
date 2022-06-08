import * as yup from 'yup';

export const registerSchema = yup
    .object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(4).max(15).required(),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
    })
    .required();

export const loginSchema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().required(),
    })
    .required();

export const accountSettingsStringField = yup
    .object({
        editedField: yup.string().required(),
        password: yup.string().required(),
    })
    .required();

export const accountSettingsEmail = yup
    .object({
        editedField: yup.string().email().required(),
        password: yup.string().required(),
    })
    .required();

export const accountSettingsPassword = yup
    .object({
        editedField: yup.string().min(4).max(15).required(),
        password: yup.string().required(),
    })
    .required();
