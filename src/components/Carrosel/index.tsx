import React, { Dispatch, SetStateAction, useState } from 'react'
import { Pokemon } from 'classes/pokemon/pokemon'
import { Button } from 'components/Button'
import './Carrosel.css'

type PokeCardProps = {
  Pokemon: Pokemon
  onSelect: () => void
}

const PokemonCardRent = (props: PokeCardProps) => {
  const fullName = `${props.Pokemon.name}, ${props.Pokemon.species}`
  const minAge = props.Pokemon.getMinAge()

  return (
    <div className="pokemon-card-container">
      <div id="pokemon-card-png">imagem</div>
      <div id="pokemon-card-content">
        <h1 id="pokemon-card-header">{fullName}</h1>
        <div id="pokemon-card-divbar" />
        <div id="pokemon-card-info-container">
          <div id="pokemon-card-info-list">
            <p className="pokemon-card-info-text">
              Type: {props.Pokemon.type.join(', ')}
            </p>
            <p className="pokemon-card-info-text">
              Montaria: {props.Pokemon.mountType}
            </p>
            <p className="pokemon-card-info-text">Idade mínima: {minAge}</p>
          </div>
          <div className="pokemon-card-buttons-container">
            <div id="pokemon-card-button-select">
              <Button
                ButtonText="Selecionar"
                onClick={() => props.onSelect()}
              />
            </div>
            <div id="pokemon-card-button-bio">
              <Button
                ButtonText="Mais sobre a espécie"
                onClick={() => console.log(props.Pokemon.biography)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const PokemonCardAdoption = (props: PokeCardProps) => {
  const fullName = `${props.Pokemon.name}, ${props.Pokemon.species}`

  return (
    <div className="pokemon-card-container">
      <div id="pokemon-card-png">imagem</div>
      <div id="pokemon-card-content">
        <h1 id="pokemon-card-header">{fullName}</h1>
        <div id="pokemon-card-divbar" />
        <div id="pokemon-card-info-container">
          <div id="pokemon-card-info-list">
            <p className="pokemon-card-info-text">
              Type: {props.Pokemon.type.join(', ')}
            </p>
            <p className="pokemon-card-info-text">
              Idade: {props.Pokemon.pokeIndex}
            </p>
          </div>
          <div className="pokemon-card-buttons-container">
            <div id="pokemon-card-button-adopt">
              <Button ButtonText="Adotar" onClick={() => props.onSelect()} />
            </div>
            <div id="pokemon-card-button-bio">
              <Button
                ButtonText="Mais sobre a espécie"
                onClick={() => console.log(props.Pokemon.biography)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type PokeCarroselProps = {
  Pokemons: Pokemon[]
  isRentMode: boolean
  setCurrentPokemon: Dispatch<SetStateAction<Pokemon>>
}

export const PokemonCarrosel = (props: PokeCarroselProps) => {
  const [carroselState, setCarroselState] = useState<{
    currentList: Pokemon[]
    listPointer: number
  }>({
    currentList:
      props.Pokemons.length >= 3
        ? [...props.Pokemons.slice(0, 3)]
        : [...props.Pokemons],
    listPointer: props.Pokemons.length >= 3 ? 3 : props.Pokemons.length
  })

  return (
    <div className="carrosel-container">
      {carroselState.listPointer > 3 && (
        <div
          className="carrosel-arrows"
          onClick={() => {
            setCarroselState({
              currentList: [
                ...props.Pokemons.slice(
                  carroselState.listPointer - 6,
                  carroselState.listPointer - 3
                )
              ],
              listPointer: carroselState.listPointer - 3
            })
          }}
        >
          {'<'}
        </div>
      )}
      <div>
        {carroselState.currentList.map(Pokemon => {
          return (
            <>
              {props.isRentMode ? (
                <PokemonCardRent
                  onSelect={() => props.setCurrentPokemon(Pokemon)}
                  Pokemon={Pokemon}
                />
              ) : (
                <PokemonCardAdoption
                  onSelect={() => props.setCurrentPokemon(Pokemon)}
                  Pokemon={Pokemon}
                />
              )}
            </>
          )
        })}
      </div>
      {props.Pokemons.length > 3 &&
        props.Pokemons.length - carroselState.listPointer > 0 && (
          <div
            className="carrosel-arrows"
            onClick={() => {
              setCarroselState({
                currentList: [
                  ...props.Pokemons.slice(
                    carroselState.listPointer,
                    carroselState.listPointer + 3
                  )
                ],
                listPointer: carroselState.listPointer + 3
              })
            }}
          >
            {'>'}
          </div>
        )}
    </div>
  )
}
