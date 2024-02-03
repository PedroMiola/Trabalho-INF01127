import React, { SetStateAction, Dispatch } from 'react'
import { ButtonGroup } from 'components/ButtonGroup'
import './NoLoginPage.css'

import { MainContainer } from 'components/MainContainer'

type NoLoginPageProps = {
  setPage: Dispatch<SetStateAction<string>>
}

export const NoLoginPage = (props: NoLoginPageProps) => {
  const GoToLoginPageButton = () => {
    return <div onClick={() => props.setPage('Login')}>Faça o login</div>
  }

  return (
    <>
      <MainContainer
        Component1={
          <ButtonGroup
            Button1OnClick={() => props.setPage('Carrosel')}
            Button1Text="Carrosel"
            Button2OnClick={() => props.setPage('Login')}
            Button2Text="Login"
            Button3OnClick={() => props.setPage('Login')}
            Button3Text="Login"
            Button4OnClick={() => props.setPage('Login')}
            Button4Text="Login"
            Button5OnClick={() => props.setPage('Login')}
            Button5Text="Login"
          />
        }
        Component2={
          <div>
            <GoToLoginPageButton />
          </div>
        }
      />
    </>
  )
}
