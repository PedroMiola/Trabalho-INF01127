import { RegisterContainer } from 'components/RegisterContainer'
import React from 'react'
import AlokamonA from '../../assets/images/alokamon_A.png'
import './CreditCardFormPage.css'
import { Button } from 'components/Button'

const CreditCardForm = () => {
  return (
    <div>
      <div
        id="credit-card-form-page-header"
        style={{
          marginTop: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        Dados do cartão
      </div>

      <form id="credit-card-from-container">
        <div id="credit-card-form-row-1">
          <input
            className="credit-card-form-input"
            type="string"
            id="credit-card-number"
            placeholder="Número do cartão"
          />
          <input
            className="credit-card-form-input"
            type="date"
            id="credit-card-due-date"
            placeholder="Data de vencimento"
          />
        </div>
        <div id="credit-card-form-row-2">
          <input
            className="credit-card-form-input"
            type="text"
            id="credit-card-form-name"
            placeholder="Nome do titular"
          />
        </div>
        <div id="credit-card-form-row-3">
          <input
            className="credit-card-form-input"
            type="number"
            id="credit-card-form-security-number"
            placeholder="Cóodigo de segurança"
          />
        </div>
        <div id="credit-card-form-verify-button">
          <Button ButtonText="Verificar" onClick={() => console.log('oi')} />
        </div>
      </form>
    </div>
  )
}

const AlokaLogo = () => {
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

export const CreditCardFormPage = () => {
  return (
    <RegisterContainer
      Component1={<AlokaLogo />}
      Component2={<CreditCardForm />}
    />
  )
}
