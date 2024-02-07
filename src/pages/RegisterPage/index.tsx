import { RegisterContainer } from 'components/RegisterContainer'
import AlokamonA from '../../assets/images/alokamon_A.png'
import './RegisterPage.css'
import React, { useState } from 'react'
import { Button } from 'components/Button'

const BirthdayBox = () => {
  const [birthday, setBirthday] = useState('')

  const handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let formattedBirthday = event.target.value
    if (formattedBirthday.length === 2 || formattedBirthday.length === 5) {
      formattedBirthday += '/'
    }
    setBirthday(formattedBirthday)
  }

  return (
    <div style={{ marginLeft: '2%', width: '48%' }}>
      <label htmlFor="birthday"></label>
      <input
        type="text"
        id="birthday"
        placeholder="📆 Data de aniversário (dd/mm/yyyy)"
        style={{ width: '100%', height: '50px' }}
        pattern="\d{2}\/\d{2}\/\d{4}"
        value={birthday}
        onChange={handleBirthdayChange}
      />
    </div>
  )
}

const CPFBox = () => {
  const [cpf, setCPF] = useState('')

  const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let formattedCPF = event.target.value
    if (formattedCPF.length === 3 || formattedCPF.length === 7) {
      formattedCPF += '.'
    } else if (formattedCPF.length === 11) {
      formattedCPF += '-'
    }
    setCPF(formattedCPF)
  }

  return (
    <div style={{ marginRight: '2%', width: '48%' }}>
      <label htmlFor="CPF"></label>
      <input
        type="text"
        id="CPF"
        placeholder="ℹ CPF"
        style={{ width: '100%', height: '50px' }}
        pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
        value={cpf}
        onChange={handleCPFChange}
      />
    </div>
  )
}

const PasswordBox = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value)
  }

  return (
    <>
      <div style={{ marginRight: '2%', width: '48%' }}>
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          placeholder="🔒 Senha"
          // style={{ width: '100%', height: '50px' }}
          style={{ width: '100%', height: '50px' }}
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div style={{ marginLeft: '2%', width: '48%' }}>
        <label htmlFor="confirmPassword"></label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="🔒 Confirmar senha"
          style={{ width: '100%', height: '50px' }}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
    </>
  )
}

// const RegisterText = () => {
//   return (
//     <div>
//       <div
//         className="register-header"
//         id="Register-header"
//         style={{
//           marginTop: '50px',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         Cadastre-se
//       </div>

//       <div style={{ marginTop: '20px', width: '100%', height: '100%' }}>
//         <label htmlFor="name"></label>
//         <input type="text" id="name" placeholder="Nome completo" style={{ width: '80%', height: '50px' }} />
//       </div>

//       <div style={{ marginTop: '20px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%'}}>
//         <CPFBox />
//         <BirthdayBox />
//       </div>

//       <div style={{ marginTop: '20px', width: '100%', height: '100%' }}>
//         <label htmlFor="email"></label>
//         <input type="email" id="email" placeholder="E-mail" style={{ width: '80%', height: '50px' }} />
//       </div>

//       <div style={{ marginTop: '20px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%'}}>
//         <PasswordBox />
//       </div>

//     </div>
//   )
// }

const RegisterText = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="topContainer">Cadastro</div>
        <div className="formContainer">
          <div className="formLine">
            <input
              type="text"
              id="name"
              placeholder="👱 Nome completo"
              style={{ width: '100%', height: '50px' }}
            />
          </div>
          <div className="formLine">
            <CPFBox />
            <BirthdayBox />
          </div>
          <div className="formLine">
            <input
              type="email"
              id="email"
              placeholder="📧 E-mail"
              style={{ width: '100%', height: '50px' }}
            />
          </div>
          <div className="formLine">
            <PasswordBox />
          </div>
        </div>
        <div className="buttonStyle">
          <Button
            submit={false}
            onClick={() => console.log('Cadastro realizado')}
            ButtonText="Cadastrar"
          />
        </div>
      </div>
    </>
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
