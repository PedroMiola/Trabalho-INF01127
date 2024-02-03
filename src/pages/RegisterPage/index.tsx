import { RegisterContainer } from 'components/RegisterContainer'
import React from 'react'
import './RegisterPage.css'

export const RegisterPage = () => {
  return (
    <RegisterContainer
      Component1={<h1>Register</h1>}
      Component2={<p>Register page content</p>}
    />
  )
}
