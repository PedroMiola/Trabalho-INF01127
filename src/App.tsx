import './App.css'
import React, { useState } from 'react'
import { NoLoginPage } from 'pages/NoLoginPage'
import { UserPage } from 'pages/UserPage'
import { LoginPage } from 'pages/LoginPage'
import { RegisterPage } from 'pages/RegisterPage'
import { CarroselPage } from 'pages/CarroselPage'
import { CreditCardFormPage } from 'pages/CreditCardFormPage'

export type Logininfo = {
  isLoggedIn: boolean
  user?: User
}

export const App = () => {
  const [currentPage, setCurrentPage] = useState<string>('NoLogin')

  return (
    <div className="App">
      {currentPage === 'NoLogin' ? (
        <NoLoginPage setPage={setCurrentPage} />
      ) : currentPage === 'Register' ? (
        <RegisterPage />
      ) : currentPage === 'Login' ? (
        <LoginPage setPage={setCurrentPage} />
      ) : currentPage === 'User' ? (
        <UserPage />
      ) : currentPage === 'Carrosel' ? (
        <CarroselPage setPage={setCurrentPage} />
      ) : currentPage === 'CreditCard' ? (
        <CreditCardFormPage />
      ) : (
        <div>Hello</div>
      )}
    </div>
  )
}

export default App
