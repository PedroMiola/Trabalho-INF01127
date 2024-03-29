import React, { Dispatch, SetStateAction } from 'react'
import { MainContainer } from 'components/MainContainer'
import { ButtonGroup } from 'components/ButtonGroup'
import './DashboardPage.css'
import { User } from 'classes/users/clients/user'
import { Pokemon } from 'classes/pokemon/pokemon'

type DashboardPageProps = {
  setPage: Dispatch<SetStateAction<string>>
  user: User | undefined
}

type UserDashboardProps = {
  user: User | undefined
}

const RamonDino = new Pokemon(
  'Ramon',
  ['fighting'],
  68,
  'Spotting',
  'LoremIpsumm',
  true,
  68,
  150
)

const Pedro = new Pokemon(
  'Pedro',
  ['fighting', 'fire'],
  151,
  'Homework',
  'Gremio gremio',
  true,
  68,
  150
)

const Zannata = new Pokemon(
  'Zannata',
  ['ice', 'steel'],
  361,
  'Working',
  'Eu amo webdev',
  true,
  68,
  150
)

const testUser = new User(
  'Ryuzaki',
  24,
  12312312300,
  'joao123@gmail.com',
  'oioi123'
)

testUser.rentPokemon(RamonDino, 5, 'Spotting')
testUser.rentPokemon(Pedro, 50, 'Homework')
testUser.rentPokemon(Zannata, 3, 'Working')

testUser.endRent(Pedro)
testUser.endRent(RamonDino)
testUser.endRent(Zannata)
testUser.rentPokemon(Pedro, 1, 'Spotting')
testUser.endRent(Pedro)
testUser.rentPokemon(Pedro, 1, 'Spotting')
testUser.endRent(Pedro)
testUser.rentPokemon(Pedro, 1, 'Spotting')
testUser.endRent(Pedro)
testUser.rentPokemon(Pedro, 1, 'Spotting')
testUser.endRent(Pedro)
testUser.rentPokemon(Pedro, 1, 'Spotting')
testUser.endRent(Pedro)
testUser.rentPokemon(Pedro, 1, 'Spotting')
testUser.endRent(Pedro)
testUser.rentPokemon(Pedro, 1, 'Spotting')
testUser.endRent(Pedro)

const UserDashoard = (props: UserDashboardProps) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-row-default" id="dashboard-row-rent-numbers">
        Número de alguéis: {`${props.user?.getNuberOfHistoryRentedPokemons()}`}
      </div>
      <div
        className="dashboard-row-default"
        id="dashboard-row-current-rent-numbers"
      >
        Número de alguéis ativos:{' '}
        {`${testUser.getNumberOfCurrentlyRentedPokemons()}`}
      </div>
      <div
        className="dashboard-row-default"
        id="dashboard-row-rent-total-durantion"
      >
        Tempo total de aluguél: {`${props.user?.getTimeOfRentedPokemons()}`}{' '}
        dias
      </div>
      <div
        className="dashboard-row-default"
        id="dashboard-row-favorite-pokemon"
      >
        <div>
          <div id="user-favorite-pokemon-string"></div>
          <div id="user-favorite-pokemon-times-rented">
            Alugado{' '}
            {`${props.user
              ?.getFavoritePokemon()
              .getNumberOfRentsByUser(props.user)}`}{' '}
            vezes
          </div>
        </div>
        <div id="user-favorite-pokemon-container">
          <div id="user-favorite-pokemon-png">
            <img src={props.user?.getFavoritePokemon().getImage()} alt="" />
          </div>
          <div id="user-favorite-pokemon-name">
            {props.user?.getFavoritePokemon().getName()}
          </div>
        </div>
      </div>
      <div className="dashboard-row-default" id="dashboard-row-vip-ad"></div>
    </div>
  )
}

export const DashboardPage = (props: DashboardPageProps) => {
  return (
    <MainContainer
      Component1={
        <ButtonGroup
          Button1OnClick={() => props.setPage('Carrosel')}
          Button1Text="Carrosel"
          Button2OnClick={() => props.setPage('NoLogin')}
          Button2Text="Home"
          Button3OnClick={() => {
            if (props.user) {
              props.setPage('Dashboard')
            } else {
              alert('Necessário fazer Login')
            }
          }}
          Button3Text="Dashboard"
          Button4OnClick={() => props.setPage('CreditCard')}
          Button4Text="CreditCard"
          Button5OnClick={() => props.setPage('Login')}
          Button5Text="Trocar Usuário"
        />
      }
      Component2={
        <>
          <h1>Bem vindo {`${props.user?.getName()}`}!</h1>
          <UserDashoard user={props.user} />
        </>
      }
    />
  )
}
