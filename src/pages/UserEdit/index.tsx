import React, { SetStateAction, Dispatch } from 'react'
import { ButtonGroup } from 'components/ButtonGroup'
import './UserEdit.css'
import { MainContainer } from 'components/MainContainer'
import { Button } from 'components/Button'
import logo from './../../assets/images/alokamon_A.png'
import foto_perfil from './../../assets/images/sem_foto.png'


type UserEditPageProps = {
    setPage: Dispatch<SetStateAction<string>>
}

const ContainerAzul = ({ setPage }: UserEditPageProps) => {

    return(
        <>
            <div className='logo'>
                <img className='imgLogo' src={logo}/>
            </div>
            <ButtonGroup
                Button1OnClick={() => setPage('User')}
                Button1Text="Voltar para Home"
                Button2OnClick={() => setPage('Login')}
                Button2Text="Faça um aluguel"
                Button3OnClick={() => setPage('UserEdit')}
                Button3Text="Editar cadastro"
                Button4OnClick={() => setPage('Login')}
                Button4Text="Seja VIP!"
                Button5OnClick={() => setPage('NoLogin')}
                Button5Text="Sair"
            />
        </>
    )
}

const ContainerBranco = ({ setPage }: UserEditPageProps) => {

    return(
        <>
            <div className='mainContainer'>
                <div className='perfilContainer'>
                    <img className='profilePicture' src={foto_perfil}/>
                </div>
                <div className='formsContainer'>
                    <div className='topContainer'>
                        Atualizar cadastro
                    </div>
                    <div className='descriptionContainer'>E-mail</div>
                    <input type="text"/>

                    <div className='descriptionContainer'>Nome</div>
                    <input type="text"/>

                    <div className='descriptionContainer'>Senha</div>
                    <input type="text"/>

                    <div className='buttonStyle'>
                        <Button onClick={() => console.log("Atualizou")} ButtonText='Atualizar'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export const UserEdit = (props: UserEditPageProps) => {

    return(
        <>
            <MainContainer
                Component1={
                    <ContainerAzul setPage={props.setPage}/>
                }
                Component2={
                    <ContainerBranco setPage={props.setPage}/>
                }/>
        </>
    )
}