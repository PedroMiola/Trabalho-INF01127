import React from 'react'
import './RegisterContainer.css'

type RegisterContainerProps = {
  Component1: React.ReactElement
  Component2: React.ReactElement
}

export const RegisterContainer = (props: RegisterContainerProps) => {
  return (
    <div className="container">
      <div id="blue-container-register">{props.Component1}</div>
      <div id="white-container-register">{props.Component2}</div>
    </div>
  )
}
