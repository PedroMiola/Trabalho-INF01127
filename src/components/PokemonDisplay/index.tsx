import React, { useState } from 'react'
import { Pokemon } from 'classes/pokemon/pokemon'
import { Button } from 'components/Button'

import './PokemonDisplay.css'

type PokeShowcase = {
  Poke: Pokemon
  onSelect: () => void
  onClose: () => void
}

export const PokemonDisplayComponent = (props: PokeShowcase) => {
  const [paymentOption, setPaymentOption] = useState(0)
  const fullName = `${props.Poke.name}, ${props.Poke.species}`
  const rentPrice = () => {
    return `${props.Poke.getPricePerDay()} R$/dia\nOU\n${
      props.Poke.getPricePerDay() * 0.7
    } com  VIP`
  }

  return (
    <div className="pokemon-display-container">
      <div id="pokemon-display-header">{fullName}</div>
      <div id="pokemon-display-divbar" />
      <div id="pokemon-display-info-container">
        <div id="pokemon-display-png">png</div>
        <div id="pokemon-display-content-container">
          <div id="pokemon-display-content-1">
            <div>
              <p className="pokemon-display-card-info-text">
                Type: {props.Poke.type.join(', ')}
              </p>
              <p className="pokemon-display-card-info-text">
                Montaria: {props.Poke.mountType}
              </p>
              <p className="pokemon-display-card-info-text">
                Idade mínima: {props.Poke.getMinAge()}
              </p>
            </div>
            <div id="pokemon-display-rent-price">{rentPrice()}</div>
          </div>
          <div id="pokemon-display-content-2">{props.Poke.biography}</div>
        </div>
      </div>
      <div id="pokemon-display-divbar" />
      <div className="pokemon-display-payment-options-container">
        <div
          id="pokemon-display-credit-card"
          style={{
            color: paymentOption === 1 ? '#e2504c' : 'black'
          }}
          onClick={() => setPaymentOption(1)}
        >
          crédito
        </div>
        <div
          id="pokemon-display-money-card"
          style={{
            color: paymentOption === 2 ? '#e2504c' : 'black'
          }}
          onClick={() => setPaymentOption(2)}
        >
          dinheiro
        </div>
      </div>
      <div id="pokemon-display-footer">
        <div className="pokemon-display-footer-button">
          <Button ButtonText="Voltar" onClick={() => props.onClose()} />
        </div>
        <div className="pokemon-display-rent-duration">
          <label id="pokemon-desplay-rent-duration-label" htmlFor="">
            Duração do aluguél:{' '}
          </label>
          <input type="number" />
        </div>
        <div className="pokemon-display-footer-button">
          <Button ButtonText="Selecionar" onClick={() => props.onSelect()} />
        </div>
      </div>
    </div>
  )
}
