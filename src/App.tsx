import './App.css'
import React, { useState } from 'react'
import { User } from 'classes/users/clients/user'
import { NoLoginPage } from 'pages/NoLoginPage'
import { UserPage } from 'pages/UserPage'
import { LoginPage } from 'pages/LoginPage'
import { RegisterPage } from 'pages/RegisterPage'

export type Logininfo = {
  isLoggedIn: boolean
  user?: User
}

export const App = () => {
  const [loginState, setLoginState] = useState<Logininfo>({
    isLoggedIn: false
  })

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
      ) : (
        <div>Oi</div>
      )}
    </div>
  )
}

export default App
