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
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum magna magna, ac auctor magna dapibus at. Pellentesque interdum nisi augue, eu vestibulum turpis condimentum eu. Suspendisse nec euismod lorem. Proin nisl metus, interdum vel varius eget, sodales blandit tortor. Donec velit neque, auctor a dignissim non',
  true,
  1,
  200
)

type CarroselPageProps = {
  setPage: Dispatch<SetStateAction<string>>
  carroselMode: number
}

export const CarroselPage = (props: CarroselPageProps) => {
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | undefined>(
    undefined
  )

  const Pikachu = new Pokemon(
    'Johnny',
    ['electric'],
    25,
    'Terrestre',
    'bio',
    false,
    2,
    100
  )

  const Charizard = new Pokemon(
    'Flame',
    ['fire', 'flying'],
    6,
    'Aérea',
    'bio',
    true,
    3,
    300
  )

  const Charizard2 = new Pokemon(
    'Flame2',
    ['fire', 'flying'],
    6,
    'Aérea',
    'bio',
    true,
    3,
    300
  )

  const Charizard3 = new Pokemon(
    'Flame3',
    ['fire', 'flying'],
    6,
    'Aérea',
    'bio',
    true,
    3,
    300
  )

  const A_Ninetales = new Pokemon(
    'Jiraya',
    ['grass'],
    253,
    'Aérea',
    'bio',
    true,
    3,
    300
  )

  const A_Ninetales2 = new Pokemon(
    'Kaguya2',
    ['ice', 'fairy'],
    457,
    'Aérea',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum magna magna, ac auctor magna dapibus at. Pellentesque interdum nisi augue, eu vestibulum turpis condimentum eu. Suspendisse nec euismod lorem. Proin nisl metus, interdum vel varius eget, sodales blandit tortor. Donec velit neque, auctor a dignissim non',
    true,
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
    A_Ninetales2,
    A_Ninetales2
  ]

  const CarroselComponent = () => {
    return (
      <>
        <div className="text2" id="form-header-text">
          {props.carroselMode === 0
            ? 'Alugue um Pokémon'
            : props.carroselMode === 1
            ? 'Adote um Pokémon'
            : 'Histórico'}
        </div>
        <div id="carrosel-component-container">
          {!currentPokemon ? (
            <PokemonCarrosel
              Pokemons={PokemonList4}
              setCurrentPokemon={setCurrentPokemon}
              isCarroselMode={props.carroselMode}
            />
          ) : (
            <PokemonDisplayComponent
              Poke={currentPokemon}
              onClose={() => setCurrentPokemon(undefined)}
              onSelect={() => props.setPage('CreditCard')}
            />
          )}
        </div>
      </>
    )
  }

  return (
    <MainContainer
      Component1={
        <ButtonGroup
          Button1OnClick={() => props.setPage('Dashboard')}
          Button1Text="Voltar para home"
          Button2OnClick={() => props.setPage('Carrosel')}
          Button2Text="Faça um aluguel"
          Button3OnClick={() => props.setPage('Dashboard')}
          Button3Text="Editar cadastro"
          Button4OnClick={() => props.setPage('Login')}
          Button4Text="Seja VIP (TODO)"
          Button5OnClick={() => props.setPage('Dashboard')}
          Button5Text="Login"
        />
      }
      Component2={<CarroselComponent />}
    />
  )
}
