import React from 'react'
import './styles.css'

type MainContainerProps = {
  Component1: React.ReactElement
  Component2: React.ReactElement
}

export const MainContainer = (props: MainContainerProps) => {
  return (
    <div className="container">
      <div id="blue-container">{props.Component1}</div>
      <div id="white-container">{props.Component2}</div>
    </div>
  )
}
