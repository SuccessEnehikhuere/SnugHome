import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link, redirect } from 'react-router-dom'
import { customFetch } from '../utilis'
import { toast } from 'react-toastify'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
 
  try {
    const response = await customFetch.post('/auth/local/register', data)
    toast.success('account created successfully')
    return redirect('/login')

  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      'please double check your credentials'

    toast.error(errorMessage)
    return null
  }
}

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 capitalize"
      >
        <h4 className="text-center text-3xl font-bold">register</h4>
        <FormInput
          type="text"
          name="username"
          label="name"
          defaultValue="John35"
        />
        <FormInput
          type="email"
          name="email"
          label="email"
          defaultValue="john35t@gmail.com"
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="submit" />
        </div>

        <p className="text-center">
          already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover text-[#D87D4A] font-medium"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Register
