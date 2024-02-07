import React, { Dispatch, useState, SetStateAction } from 'react'
import { Pokemon } from 'classes/pokemon/pokemon'
import { Button } from 'components/Button'

import './PokemonDisplay.css'

type PokeShowcase = {
  Poke: Pokemon
  onSelect: () => void
  onClose: () => void
  setRentDays: Dispatch<SetStateAction<number>>
}

export const PokemonDisplayComponent = (props: PokeShowcase) => {
  const [paymentOption, setPaymentOption] = useState(0)
  const fullName = `${props.Poke.name}, ${props.Poke.getSpecies()}`
  const rentPrice = () => {
    return `${props.Poke.getPricePerDay()} R$/dia\nOU\n${
      props.Poke.getPricePerDay() * 0.7
    } com  `
  }
  const imagePath = props.Poke.getImage()
  const typeImgArrayPath = props.Poke.getTypeImage()

  return (
    <div className="pokemon-display-container">
      <div id="pokemon-display-header">{fullName}</div>
      <div id="pokemon-display-divbar" />
      <div id="pokemon-display-info-container">
        <div id="pokemon-display-png-container">
          <img id="pokemon-display-png" src={imagePath} />
        </div>
        <div id="pokemon-display-content-container">
          <div id="pokemon-display-content-1">
            <div>
              <div id="pokemon-types-image-row">
                <p
                  className="pokemon-display-card-info-text"
                  id="pokemon-card-info-type-text"
                >
                  Tipo:{' '}
                </p>
                {typeImgArrayPath.length === 1 ? (
                  <>
                    <img id="pokemon-type-images" src={typeImgArrayPath[0]} />
                  </>
                ) : (
                  <>
                    <img id="pokemon-type-images" src={typeImgArrayPath[0]} />
                    <img id="pokemon-type-images" src={typeImgArrayPath[1]} />
                  </>
                )}
              </div>
              <p className="pokemon-display-card-info-text">
                Montaria: {props.Poke.mountType}
              </p>
              <p className="pokemon-display-card-info-text">
                Idade mínima: {props.Poke.getMinAge()}
              </p>
            </div>
            <div id="pokemon-display-rent-price">
              {`${rentPrice()}`}
              <p style={{ color: '#e2504c', margin: '0' }}>VIP</p>
            </div>
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
          CARTÃO DE CRÉDITO
        </div>
        <div
          id="pokemon-display-money-card"
          style={{
            color: paymentOption === 2 ? '#e2504c' : 'black'
          }}
          onClick={() => setPaymentOption(2)}
        >
          DINHEIRO
        </div>
      </div>
      <div id="pokemon-display-footer">
        <div className="pokemon-display-footer-button">
          <Button
            submit={false}
            ButtonText="Voltar"
            onClick={() => props.onClose()}
          />
        </div>
        <div className="pokemon-display-rent-duration-container">
          <label id="pokemon-desplay-rent-duration-label" htmlFor="">
            Duração do aluguél:{' '}
          </label>
          <input id="pokemon-desplay-rent-duration-input" type="number" />
        </div>
        <div className="pokemon-display-footer-button">
          <Button
            submit={false}
            ButtonText="Selecionar"
            onClick={() => props.onSelect()}
          />
        </div>
      </div>
    </div>
  )
}
