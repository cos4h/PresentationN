import {z} from 'zod';

export const registerSchema= z.object({
  username: z.string({
    required_error: 'usuario es requerido'
  }),
  email: z.string({
    required_error: 'Email es requerido'
  }).email({
    message: 'Email es invalido'
  }),
  password: z.string({
    required_error: 'Contraseña requerida'

  }).min(6, {
      message: 'La contraseña debe tener almenos 6 caracteres'
  }),
  phone: z.string({
    required_error: 'numero de celular es requerido'
  }).max(10, {
    message: 'el numero de celular debe tener 10 digitos'
  }).min(10,{
    message: 'el numero de celular debe tener 10 digitos'
  })
})

export const loginSchema = z.object({
  email: z.string({
    required_error: 'Email es requerido'
  }).email({
    message: 'Email invalido'
  }),
  password: z.string({
    required_error: 'Contraseña es requerida'

  }).min(6, {
      message: 'La contraseña debe tener almenos 6 caracteres'
  })
})