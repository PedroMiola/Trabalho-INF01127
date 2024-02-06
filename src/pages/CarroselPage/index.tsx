import React, { useState } from 'react'
import { MainContainer } from 'components/MainContainer'
import { Pokemon } from 'classes/pokemon/pokemon'
import './CarroselPage.css'
import { PokemonCarrosel } from 'components/Carrosel'

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

export const CarroselPage = () => {
  const [currentPokemon, setCurrentPokemon] = useState(LauraLapras)

  const Pikachu = new Pokemon(
    'Johnny',
    ['electric', ''],
    'Pikachu',
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
    'Flame',
    ['fire', 'flying'],
    'Charizard',
    3,
    'Aérea',
    0,
    'bio',
    true,
    [],
    3,
    300
  )

  const Charizard2 = new Pokemon(
    'Flame2',
    ['fire', 'flying'],
    'Charizard2',
    3,
    'Aérea',
    0,
    'bio',
    true,
    [],
    3,
    300
  )

  const Charizard3 = new Pokemon(
    'Flame3',
    ['fire', 'flying'],
    'Charizard3',
    3,
    'Aérea',
    0,
    'bio',
    true,
    [],
    3,
    300
  )

  const A_Ninetales = new Pokemon(
    'Kaguya',
    ['ice', 'fairy'],
    'Alolan Ninetales',
    3,
    'Aérea',
    0,
    'bio',
    true,
    [],
    3,
    300
  )

  const A_Ninetales2 = new Pokemon(
    'Kaguya2',
    ['ice', 'fairy'],
    'Alolan Ninetales',
    3,
    'Aérea',
    0,
    'bio',
    true,
    [],
    3,
    300
  )

  const PokemonList0 = [Charizard, Pikachu]
  const PokemonList1 = [Charizard, Pikachu, LauraLapras]

  const PokemonList2 = [
    Charizard,
    Charizard2,
    Charizard3,
    LauraLapras,
    A_Ninetales,
    Pikachu
  ]

  const PokemonList3 = [Charizard, Charizard2, Charizard3, LauraLapras]

  const PokemonList4 = [
    Charizard,
    Charizard2,
    Charizard3,
    LauraLapras,
    A_Ninetales,
    Pikachu,
    A_Ninetales2
  ]

  return (
    <MainContainer
      Component1={<></>}
      Component2={
        <PokemonCarrosel
          Pokemons={PokemonList4}
          setCurrentPokemon={setCurrentPokemon}
          isRentMode={true}
        />
      }
    />
  )
}
