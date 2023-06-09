import * as yup from 'yup'

const loginFormSchema = yup.object().shape({
  nombre: yup
    .string()
    .required('El nombre de usuario es obligatorio'),
  password: yup
    .string()
    .required('La contraseña es obligatoria')
})

export default loginFormSchema
