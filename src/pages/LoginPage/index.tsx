import React, { Dispatch, SetStateAction } from 'react'
import { MainContainer } from 'components/MainContainer'
import './styles.css'

type AwakenTrainerTextsProps = {
  setPage: Dispatch<SetStateAction<string>>
}

const AwakenTrainerTexts = ({ setPage }: AwakenTrainerTextsProps) => {
  return (
    <div>
      <div className="text1" id="header-text">
        Desperte o treinador que há em você!
      </div>
      <div id="div-line" />
      <div className="text1" id="body-text">
        Transforme sua jornada Pokémon com AlokaMon, o serviço de aluguel de
        Pokémon que coloca a diversão em suas mãos. Cadastre-se agora para
        explorar o vasto mundo dos Pokémon raros e lendários, sem a preocupação
        de capturas e treinamentos. Desfrute de batalhas emocionantes, faça
        novos amigos e mergulhe na magia de ser um treinador sem complicações.
        Sua aventura aguarda! AlokaMon - O seu caminho para a emoção Pokémon
        instantânea.
      </div>
      <div onClick={() => setPage('Register')} id="dummy-button">
        Cadastrar
      </div>
    </div>
  )
}

const LoginContainer = () => {
  return (
    <div>
      <div className="text2" id="form-header-text">
        Login
      </div>
      <form>
        <label className="label" htmlFor="email">
          E-mail:
        </label>
        <br />
        <input className="input" type="text" id="text" name="email" />
        <br />
        <label className="label" htmlFor="password">
          Password:
        </label>
        <br />
        <input className="input" type="text" id="text" name="password" />
        <div id="dummy-button">Login</div>
      </form>
    </div>
  )
}

type LoginPageProps = {
  setPage: Dispatch<SetStateAction<string>>
}

export const LoginPage = (props: LoginPageProps) => {
  return (
    <MainContainer
      Component1={<AwakenTrainerTexts setPage={props.setPage} />}
      Component2={<LoginContainer />}
    />
  )
}
