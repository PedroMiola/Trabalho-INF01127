import React from 'react'
import { Button } from 'components/Button'
import './ButtonGroup.css'

type ButtonGroupProps = {
  Button1Text: string
  Button1OnClick: () => void
  Button2Text: string
  Button2OnClick: () => void
  Button3Text: string
  Button3OnClick: () => void
  Button4Text: string
  Button4OnClick: () => void
  Button5Text: string
  Button5OnClick: () => void
}

export const ButtonGroup = (props: ButtonGroupProps) => {
  return (
    <div className="button-group">
      <div id="buttons-from-group">
        <Button
          ButtonText={props.Button1Text}
          onClick={() => props.Button1OnClick()}
        />
      </div>
      <div id="buttons-from-group">
        <Button
          ButtonText={props.Button2Text}
          onClick={() => props.Button2OnClick()}
        />
      </div>
      <div id="buttons-from-group">
        <Button
          ButtonText={props.Button3Text}
          onClick={() => props.Button3OnClick()}
        />
      </div>
      <div id="buttons-from-group">
        <Button
          ButtonText={props.Button4Text}
          onClick={() => props.Button4OnClick()}
        />
      </div>
      <div id="buttons-from-group">
        <Button
          ButtonText={props.Button5Text}
          onClick={() => props.Button5OnClick()}
        />
      </div>
    </div>
  )
}
