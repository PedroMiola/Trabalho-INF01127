import React, { Dispatch, SetStateAction, useState } from 'react'
import { MainContainer } from 'components/MainContainer'
import { Button } from 'components/Button'
import { Server } from 'classes/server'
import { LogoA } from 'components/Logo'
import './LoginPage.css'
import { User } from 'classes/users/clients/user'
type AwakenTrainerTextsProps = {
  setPage: Dispatch<SetStateAction<string>>
}

const AwakenTrainerTexts = ({ setPage }: AwakenTrainerTextsProps) => {
  return (
    <div id="trainer-awaits-container">
      <div id="logo-hello-container">
        <LogoA />
      </div>
      <div className="text1" id="header-text">
        Desperte o treinador que há em você!
      </div>
      <div id="div-line" />
      <div className="text1" id="body-text">
        Transforme sua jornada Pokémon com AlokaMon, o serviço de aluguel de
        Pokémon que coloca a diversão em suas mãos. Cadastre-se agora para
        explorar o vasto mundo dos Pokémon raros e lendários, sem a preocupação
        de capturas e treinamentos. Desfrute de batalhas emocionantes, faça
        novos amigos e mergulhe na magia de ser um treinador sem complicações.
        Sua aventura aguarda! AlokaMon - O seu caminho para a emoção Pokémon
        instantânea.
      </div>
      <div id="button-register">
        <Button
          submit={false}
          onClick={() => setPage('Register')}
          ButtonText="Cadastrar"
        />
      </div>
    </div>
  )
}

type LoginContainerProps = {
  setPage: Dispatch<SetStateAction<string>>
  setUser: Dispatch<SetStateAction<User | undefined>>
  server: Server
}

const LoginContainer = (props: LoginContainerProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const onSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    // Access the email and password from formData
    const { email, password } = formData
    const approve = props.server.approveLogin(email, password)
    if (approve) {
      console.log('login aprovado')
      props.setUser(props.server.users.getUser(email))
      props.setPage('Dashboard')
    } else {
      alert('Usuário ou senha inválidos')
    }
    // You can perform further actions, such as sending the data to a server for authentication
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <div>
      <div className="text2" id="form-header-text">
        Login
      </div>
      <form onSubmit={onSubmit}>
        <label className="label" htmlFor="email">
          E-mail:
        </label>
        <br />
        <input
          className="input"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <br />
        <label className="label" htmlFor="password">
          Password:
        </label>
        <br />
        <input
          className="input"
          type="password" // Change to 'password' for password input
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div id="button-login">
          <Button
            submit={true}
            onClick={() => console.log('oioi')}
            ButtonText="Login"
          />
        </div>
      </form>
    </div>
  )
}

type LoginPageProps = {
  setPage: Dispatch<SetStateAction<string>>
  server: Server
  setUser: Dispatch<SetStateAction<User | undefined>>
}

export const LoginPage = (props: LoginPageProps) => {
  return (
    <MainContainer
      Component1={<AwakenTrainerTexts setPage={props.setPage} />}
      Component2={
        <LoginContainer
          setUser={props.setUser}
          server={props.server}
          setPage={props.setPage}
        />
      }
    />
  )
}
