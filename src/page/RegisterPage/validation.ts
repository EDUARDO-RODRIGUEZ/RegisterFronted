import * as yup from 'yup';

export const schemaRegister = yup.object().shape({
    password: yup.string().min(8, 'el password debe tener al menos 8 caracteres').required('el campo password es requerido'),
    email: yup.string().email('el email no es invalido').required('el campo email es requerido'),
    name: yup.string().min(3, 'el name debe tener de al menos 3 caracteres').required('el campo name es requerido'),
});
