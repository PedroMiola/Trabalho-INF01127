import { RegisterContainer } from 'components/RegisterContainer'
import React from 'react'
import AlokamonA from '../../assets/images/alokamon_A.png'
import './RegisterPage.css'

const RegisterText = () => {
  return (
    <div>
      <div
        className="register-header"
        id="Register-header"
        style={{
          marginTop: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        Cadastre-se
      </div>

      <div style={{ marginTop: '20px', width: '70%', height: '100%' }}>
        <label htmlFor="name"></label>
        <input type="text" id="name" placeholder="Nome completo" />
      </div>

      <div style={{ display: 'flex', margin: '20px -10px' }}>
        <div style={{ marginTop: '20px', width: '0%', height: '100%' }}>
          <label htmlFor="CPF"></label>
          <input type="text" id="CPF" placeholder="CPF" />
        </div>
        <div style={{ marginTop: '20px', width: '0%', height: '100%' }}>
          <label htmlFor="dateOfBirth"></label>
          <input
            type="date"
            id="dateOfBirth"
            placeholder="Data de Nascimento"
          />
        </div>
      </div>
    </div>
  )
}

const RegisterLogo = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: '20px'
      }}
    >
      <img src={AlokamonA} alt="Logo" style={{ width: '75%' }} />
    </div>
  )
}

export const RegisterPage = () => {
  return (
    <RegisterContainer
      Component1={<RegisterLogo />}
      Component2={<RegisterText />}
    />
  )
}
