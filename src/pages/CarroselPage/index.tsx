import React, { useState, Dispatch, SetStateAction } from 'react'
import { MainContainer } from 'components/MainContainer'
import { Pokemon } from 'classes/pokemon/pokemon'
import { PokemonCarrosel } from 'components/Carrosel'
import { PokemonDisplayComponent } from 'components/PokemonDisplay'
import { ButtonGroup } from 'components/ButtonGroup'

import './CarroselPage.css'

const LauraLapras = new Pokemon(
  'Laura',
  ['water', 'ice'],
  131,
  'Aquática',
  0,
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum magna magna, ac auctor magna dapibus at. Pellentesque interdum nisi augue, eu vestibulum turpis condimentum eu. Suspendisse nec euismod lorem. Proin nisl metus, interdum vel varius eget, sodales blandit tortor. Donec velit neque, auctor a dignissim non',
  true,
  [],
  1,
  200
)

type CarroselPageProps = {
  setPage: Dispatch<SetStateAction<string>>
}

export const CarroselPage = (props: CarroselPageProps) => {
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | undefined>(
    undefined
  )

  const Pikachu = new Pokemon(
    'Johnny',
    ['electric', 'eletric'],
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
    6,
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
    6,
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
    6,
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
    253,
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
    457,
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
      Component1={
        <ButtonGroup
          Button1OnClick={() => props.setPage('Carrosel')}
          Button1Text="Carrosel"
          Button2OnClick={() => props.setPage('Login')}
          Button2Text="Login"
          Button3OnClick={() => props.setPage('Dashboard')}
          Button3Text="Dashboard"
          Button4OnClick={() => props.setPage('Login')}
          Button4Text="Login"
          Button5OnClick={() => props.setPage('Login')}
          Button5Text="Login"
        />
      }
      Component2={
        <>
          {!currentPokemon ? (
            <PokemonCarrosel
              Pokemons={PokemonList4}
              setCurrentPokemon={setCurrentPokemon}
              isRentMode={true}
            />
          ) : (
            <PokemonDisplayComponent
              Poke={currentPokemon}
              onClose={() => setCurrentPokemon(undefined)}
              onSelect={() => props.setPage('CreditCard')}
            />
          )}
        </>
      }
    />
  )
}
