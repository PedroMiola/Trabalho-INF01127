import React, { SetStateAction, Dispatch } from 'react'
import './NoLoginPage.css'
import logo from 'assets/images/alokamon_logo.png'
import trainer1 from 'assets/images/trainer1.png'
import trainer2 from 'assets/images/trainer2.png'
import pedro2 from 'assets/images/pedro2.png'
import pedro1 from 'assets/images/pedro1.png'
import pedro3 from 'assets/images/pedro3.png'

import { Button } from 'components/Button'

import { MainContainer } from 'components/MainContainer'

type NoLoginPageProps = {
  setPage: Dispatch<SetStateAction<string>>
}

const ContainerAzul = () => {
  return (
    <>
      <div className="lineContainer">
        <img className="imgLine" src={pedro2} />
        <div className="textLine">Voe com a gente!</div>
      </div>
      <div className="lineContainer">
        <img className="imgLine" src={pedro3} />
        <div className="textLine">Navegue com a gente!</div>
      </div>
      <div className="lineContainer">
        <img className="imgLine" src={pedro1} />
        <div className="textLine">Ande com a gente!</div>
      </div>
    </>
  )
}

const ContainerBranco = ({ setPage }: NoLoginPageProps) => {
  return (
    <>
      <div className="feedbackContainer">
        <img className="imgFeedback" src={trainer1} />
        <div className="textFeedback">
          “Gostei muito” <br /> - Price <br />
          ⭐⭐⭐⭐⭐
        </div>
      </div>
      <div className="feedbackContainer">
        <img className="imgFeedback" src={trainer2} />
        <div className="textFeedback">
          "Recomendo!" <br /> - Clair <br />
          ⭐⭐⭐⭐⭐
        </div>
      </div>
      <div className="buttonContainer">
        <Button
          submit={false}
          ButtonText="Acesse o catálogo"
          onClick={() => setPage('Carrosel')}
        />
        <div className="espaco"></div>
        <Button
          submit={false}
          onClick={() => setPage('Login')}
          ButtonText="Faça login / cadastre-se"
        />
      </div>
    </>
  )
}

export const NoLoginPage = (props: NoLoginPageProps) => {
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
