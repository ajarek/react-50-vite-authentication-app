import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Form.css'
import { useState } from 'react'
import SignIn from '../../auth/SignIn'
import SignUp from '../../auth/SignUp'

export const Form = () => {
  const [user,setUser]=useState(null)
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
   data?setUser(data):null
   SignUp(data.email, data.password)
  }
user?console.log(user):null
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'form'}>
      <input
        type='text'
        placeholder='✉️Email...'
        {...register('email')}
      />
      <p>{errors.email?.message}</p>
      <input
        type='password'
        placeholder='🔒Password...'
        {...register('password')}
      />
      <p>{errors.password?.message}</p>
      <input
        type='submit'
        value={'Start coding now '}
      />
    </form>
  )
}
export default Form
