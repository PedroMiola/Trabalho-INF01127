import React, { SetStateAction, Dispatch } from 'react'
import './styles.css'

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
        Component1={<div>Hello</div>}
        Component2={
          <div>
            <GoToLoginPageButton />
          </div>
        }
      />
    </>
  )
}
