import React, { SetStateAction, Dispatch } from 'react'
import { ButtonGroup } from 'components/ButtonGroup'
import './UserEdit.css'
import { MainContainer } from 'components/MainContainer'


type UserEditPageProps = {
    setPage: Dispatch<SetStateAction<string>>
}

const ContainerAzul = (props: UserEditPageProps) => {

    return(
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
    )
}

export const UserEdit = (props: UserEditPageProps) => {

    return(
        <>
            <MainContainer
                Component1={
                    <ContainerAzul setPage={props}/>
                }
                Component2={
                    <div>Oi</div>
                }/>
        </>
    )
}