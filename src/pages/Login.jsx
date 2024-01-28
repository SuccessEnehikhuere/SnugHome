import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 capitalize"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          name="email"
          label="email"
          defaultvalue="test@test.com"
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          defaultvalue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button className="btn btn-secondary btn-block capitalize">guest user</button>
        <p className="text-center">
          not a member yet?
          <Link to="/register" className="ml-2 link link-hover link-primary">
            register
          </Link>
          <Link to="/register"></Link>
        </p>
      </Form>
      
    </section>
  )
}

export default Login