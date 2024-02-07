import React, { Dispatch, SetStateAction, useState } from 'react'
import { Pokemon } from 'classes/pokemon/pokemon'
import { Rent } from 'classes/pokemon/renting/rent'
import { Button } from 'components/Button'
import './Carrosel.css'
import { User } from 'classes/users/clients/user'

type PokeCardProps = {
  Pokemon: Pokemon
  onSelect: () => void
}

type RentCardProps = {
  Rent: Rent
  onSelect: () => void
}

const PokemonCardRent = (props: PokeCardProps) => {
  const fullName = `${props.Pokemon.name}, ${props.Pokemon.getSpecies()}`
  const minAge = props.Pokemon.getMinAge()
  const imagePath = props.Pokemon.getImage()
  const typeImgArrayPath = props.Pokemon.getTypeImage()

  return (
    <div className="pokemon-card-container">
      <div className="pokemon-card-png-container">
        <img id="pokemon-card-png" src={imagePath} />
      </div>
      <div id="pokemon-card-content">
        <h1 id="pokemon-card-header">{fullName}</h1>
        <div id="pokemon-card-divbar" />
        <div id="pokemon-card-info-container">
          <div id="pokemon-card-info-list">
            <div id="pokemon-types-image-row">
              <p
                className="pokemon-card-info-text"
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
            <p className="pokemon-card-info-text">
              Montaria: {props.Pokemon.mountType}
            </p>
            <p className="pokemon-card-info-text">Idade mínima: {minAge}</p>
          </div>
          <div className="pokemon-card-buttons-container">
            <div id="pokemon-card-buttons">
              <Button
                submit={false}
                ButtonText="Selecionar"
                onClick={() => props.onSelect()}
              />
            </div>
            <div id="pokemon-card-buttons-bio">
              <Button
                submit={false}
                ButtonText="Mais sobre a espécie"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const PokemonCardAdoption = (props: PokeCardProps) => {
  const fullName = `${props.Pokemon.name}, ${props.Pokemon.getSpecies()}`
  const imagePath = props.Pokemon.getImage()
  const typeImgArrayPath = props.Pokemon.getTypeImage()

  return (
    <div className="pokemon-card-container">
      <div id="pokemon-card-png">
        <img src={imagePath} />
      </div>
      <div id="pokemon-card-content">
        <h1 id="pokemon-card-header">{fullName}</h1>
        <div id="pokemon-card-divbar" />
        <div id="pokemon-card-info-container">
          <div id="pokemon-card-info-list">
            <div id="pokemon-types-image-row">
              <p
                className="pokemon-card-info-text"
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
            <p className="pokemon-card-info-text">
              Idade: {props.Pokemon.pokeIndex}
            </p>
          </div>
          <div className="pokemon-card-buttons-container">
            <div id="pokemon-card-buttons">
              <Button
                submit={false}
                ButtonText="Adotar"
                onClick={() => props.onSelect()}
              />
            </div>
            <div id="pokemon-card-buttons-bio">
              <Button
                submit={false}
                ButtonText="Mais sobre a espécie"
                onClick={() => {
                  console.log(props.Pokemon.biography)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const PokemonRentHistory = (props: RentCardProps) => {
  const fullName = `${props.Rent.getPokemon().getName()}, ${props.Rent.getPokemon().getSpecies()}`
  const imagePath = props.Rent.getPokemon().getImage()
  const status = props.Rent.getPokemon().isFree() ? 'Concluido' : 'Ativo'
  const retirada = props.Rent.getStartDate()
  const devolucao = props.Rent.getPokemon().isFree()
    ? props.Rent.getEndDate().toUTCString()
    : '-'
  const tempo_aluguel = props.Rent.getNumberOfDays()

  return (
    <div className="pokemon-card-container">
      <div className="pokemon-card-png-container">
        <img id="pokemon-card-png" src={imagePath} />
      </div>
      <div id="pokemon-card-content">
        <h1 id="pokemon-card-header">{fullName}</h1>
        <div id="pokemon-card-divbar" />
        <div id="pokemon-card-info-container">
          <div className="infoContainer">
            <div className="infoText">Status: {status} </div>
            <div className="underBar"></div>

            <div className="infoText">Retirada: {retirada.toUTCString()}</div>
            <div className="underBar"></div>

            <div className="infoText">Devolução: {devolucao}</div>
            <div className="underBar"></div>

            <div className="infoText">Tempo alugado: {tempo_aluguel}</div>
            <div className="underBar"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

type PokeCarroselProps = {
  Pokemons: Pokemon[]
  isCarroselMode: number
  setCurrentPokemon: Dispatch<SetStateAction<Pokemon | undefined>>
  Rent?: Rent
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
      <div id="carrosel-items-list">
        {carroselState.currentList.map(Pokemon => {
          return (
            <>
              {props.isCarroselMode === 0 ? (
                <PokemonCardRent
                  onSelect={() => props.setCurrentPokemon(Pokemon)}
                  Pokemon={Pokemon}
                />
              ) : props.isCarroselMode === 1 ? (
                <PokemonCardAdoption
                  onSelect={() => props.setCurrentPokemon(Pokemon)}
                  Pokemon={Pokemon}
                />
              ) : props.isCarroselMode === 2 ? (
                <PokemonRentHistory
                  Rent={props.Rent}
                  onSelect={() => console.log('oi')}
                />
              ) : (
                <></>
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
