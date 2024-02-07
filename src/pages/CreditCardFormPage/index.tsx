import { RegisterContainer } from 'components/RegisterContainer'
import React, { Dispatch, SetStateAction } from 'react'
import AlokamonA from '../../assets/images/alokamon_A.png'
import './CreditCardFormPage.css'
import { Button } from 'components/Button'
import { User } from 'classes/users/clients/user'
import { Pokemon } from 'classes/pokemon/pokemon'

type CreditCardFormPageProps = {
  pokemonToRent: Pokemon
  user: User | undefined
  setPage: Dispatch<SetStateAction<string>>
}

type CreditCardFormProps = {
  currentPokemon: Pokemon
  user: User | undefined
  setPage: Dispatch<SetStateAction<string>>
}

const CreditCardForm = (props: CreditCardFormProps) => {
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
            placeholder="Código de segurança"
          />
        </div>
        <div id="credit-card-form-verify-button">
          <Button
            submit={false}
            ButtonText="Verificar"
            onClick={() => {
              props.user?.rentPokemon(
                props.currentPokemon,
                5,
                props.currentPokemon.mountType
              )
              console.log(props.currentPokemon)
              alert('Pokemon Alugado!!')
              props.setPage('Dashboard')
            }}
          />
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

export const CreditCardFormPage = (props: CreditCardFormPageProps) => {
  if (!props.user) return
  return (
    <RegisterContainer
      Component1={<AlokaLogo />}
      Component2={
        <CreditCardForm
          user={props.user}
          currentPokemon={props.pokemonToRent}
          setPage={props.setPage}
        />
      }
    />
  )
}
