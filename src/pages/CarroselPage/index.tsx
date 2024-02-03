import React from 'react'
import { MainContainer } from 'components/MainContainer'
import { ButtonGroup } from 'components/ButtonGroup'
import { Pokemon } from 'classes/pokemon/pokemon'

type PokeInfoProps = {
  Pokemon: Pokemon
}

const PokeInfo = (props: PokeInfoProps) => {
  const fullName = `${props.Pokemon.name}, ${props.Pokemon.species}`
  const minAge = props.Pokemon.getMinAge()

  return (
    <div>
      <h1>{fullName}</h1>
      <p>Type: {props.Pokemon.type.join(', ')}</p>
      <p>Montaria: {props.Pokemon.mountType}</p>
      <p>Idade mínima: {minAge}</p>
    </div>
  )
}

type PokeListProps = {
  Pokemons: Pokemon[]
}

const PokemonList = (props: PokeListProps) => {
  return (
    <div>
      {props.Pokemons.map(Pokemon => {
        return <PokeInfo Pokemon={Pokemon} />
      })}
    </div>
  )
}

export const CarroselPage = () => {
  const LauraLapras = new Pokemon(
    'Laura',
    ['water', 'ice'],
    'Lapras',
    131,
    'Aquática',
    0,
    'bio',
    true,
    [],
    1,
    200
  )
  const Pikachu = new Pokemon(
    'Pikachu',
    ['electric', ''],
    'Mouse',
    25,
    'Terrestre',
    0,
    'bio',
    false,
    [],
    2,
    100
  )

  const Charizard = new Pokemon(
    'Charizard',
    ['fire', 'flying'],
    'Flame',
    3,
    'Aérea',
    0,
    'bio',
    true,
    [],
    3,
    300
  )

  return (
    <MainContainer
      Component1={<PokeInfo Pokemon={LauraLapras} />}
      Component2={<PokemonList Pokemons={[LauraLapras, Pikachu, Charizard]} />}
    />
  )
}
