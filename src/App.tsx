import './App.css'
import React, { useState } from 'react'
import { User } from 'classes/users/clients/user'
import { NoLoginPage } from 'pages/NoLoginPage'
import { LoginPage } from 'pages/LoginPage'
import { RegisterPage } from 'pages/RegisterPage'
import { CarroselPage } from 'pages/CarroselPage'
import { CreditCardFormPage } from 'pages/CreditCardFormPage'
import { DashboardPage } from 'pages/DashboardPage'
import { Server } from 'classes/server'
import { UserEdit } from 'pages/UserEdit'
import { Pokemon } from 'classes/pokemon/pokemon'

export type Logininfo = {
  isLoggedIn: boolean
  user?: User
}

const placeholder = new Pokemon(
  'Nelson',
  ['grass', 'poison'],
  1,
  'Terrestre',
  'bio',
  true,
  2,
  250
)

export const App = () => {
  const [currentPage, setCurrentPage] = useState<string>('NoLogin')
  const [user, setUser] = useState<User>()
  const [pokemonToRent, setPokemonToRent] = useState<Pokemon>(placeholder)
  const [rentDays, setRentDays] = useState<number>(1)

  const server = new Server()
  server.loadData()

  return (
    <div className="App">
      {currentPage === 'NoLogin' ? (
        <NoLoginPage setPage={setCurrentPage} />
      ) : currentPage === 'Register' ? (
        <RegisterPage />
      ) : currentPage === 'Login' ? (
        <LoginPage setUser={setUser} server={server} setPage={setCurrentPage} />
      ) : currentPage === 'Dashboard' ? (
        <DashboardPage user={user} setPage={setCurrentPage} />
      ) : currentPage === 'Carrosel' ? (
        <CarroselPage
          user={user}
          setRentPokemon={setPokemonToRent}
          server={server}
          carroselMode={0}
          setPage={setCurrentPage}
          setRentDays={setRentDays}
        />
      ) : currentPage === 'CreditCard' ? (
        <CreditCardFormPage
          setPage={setCurrentPage}
          user={user}
          pokemonToRent={pokemonToRent}
        />
      ) : currentPage === 'UserEdit' ? (
        <UserEdit setPage={setCurrentPage} />
      ) : (
        <div>Hello</div>
      )}
    </div>
  )
}

export default App
