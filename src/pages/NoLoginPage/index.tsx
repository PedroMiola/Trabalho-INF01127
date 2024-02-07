import React, { SetStateAction, Dispatch } from 'react'
import './NoLoginPage.css'
import logo from './../../assets/images/alokamon_logo.png'
import messi from './../../assets/images/messi_careca.jpg'
import { Button } from 'components/Button'

import { MainContainer } from 'components/MainContainer'

type NoLoginPageProps = {
  setPage: Dispatch<SetStateAction<string>>
}

const ContainerAzul = () => {
  return (
    <>
      <div className="lineContainer">
        <img className="imgLine" src={messi} />
        <div className="textLine">Voe com a gente!</div>
      </div>
      <div className="lineContainer">
        <img className="imgLine" src={messi} />
        <div className="textLine">Navegue com a gente!</div>
      </div>
      <div className="lineContainer">
        <img className="imgLine" src={messi} />
        <div className="textLine">Ande com a gente!</div>
      </div>
    </>
  )
}

const ContainerBranco = ({ setPage }: NoLoginPageProps) => {
  return (
    <>
      <div className="feedbackContainer">
        <img className="imgFeedback" src={messi} />
        <div className="textFeedback">
          “Gostei muito” <br /> - Price <br />
          ⭐⭐⭐⭐⭐
        </div>
      </div>
      <div className="feedbackContainer">
        <img className="imgFeedback" src={messi} />
        <div className="textFeedback">
          "Recomendo!" <br /> - Clair <br />
          ⭐⭐⭐⭐⭐
        </div>
      </div>
      <div className="buttonContainer">
        <Button
          ButtonText="Acesse o catálogo"
          onClick={() => setPage('Carrosel')}
        />
        <div className="espaco"></div>
        <Button
          onClick={() => setPage('Login')}
          ButtonText="Faça login / cadastre-se"
        />
      </div>
    </>
  )
}

export const NoLoginPage = (props: NoLoginPageProps) => {
  const GoToLoginPageButton = () => {
    return <div onClick={() => props.setPage('Login')}>Faça o login</div>
  }

  return (
    <>
      <div className="logo">
        <img className="imgLogo" src={logo} />
      </div>
      <MainContainer
        Component1={<ContainerAzul />}
        Component2={<ContainerBranco setPage={props.setPage} />}
      />
    </>
  )
}
