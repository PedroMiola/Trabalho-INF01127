import React, { Dispatch, SetStateAction } from 'react'
import { MainContainer } from 'components/MainContainer'
import { ButtonGroup } from 'components/ButtonGroup'
import './DashboardPage.css'

type DashboardPageProps = {
  setPage: Dispatch<SetStateAction<string>>
}

// type UserDashboardProps = {
//   user: User
// }

// const testUser = new User(
//   'Ryuzaki',
//   24,
//   12312312300,
//   'joao123@gmail.com',
//   'oioi123'
// )

const UserDashoard = () => {
  return (
    <div className="dashboard-container">
      <div id="dashboard-row-rent-numbers">Número de alguéis: 15</div>
      <div id="dashboard-row-rent-total-durantion">
        Tempo total de aluguél: 25 dias
      </div>
      <div id="dashboard-row-favorite-pokemon">
        <div>
          <div id="user-favorite-pokemon-string">Pokemon favorito:</div>
          <div id="user-favorite-pokemon-times-rented">Alugado 5 vezes</div>
        </div>
        <div id="user-favorite-pokemon-container">
          <div id="user-favorite-pokemon-png">png</div>
          <div id="user-favorite-pokemon-name">Ramon</div>
        </div>
      </div>
      <div id="dashboard-row-vip-ad"></div>
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
          Button2OnClick={() => props.setPage('Login')}
          Button2Text="Login"
          Button3OnClick={() => props.setPage('Dashboard')}
          Button3Text="Dashboard"
          Button4OnClick={() => props.setPage('Login')}
          Button4Text="Login"
          Button5OnClick={() => props.setPage('Login')}
          Button5Text="Login"
        />
      }
      Component2={<></>}
    />
  )
}
