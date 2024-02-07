import { Pokemon } from './pokemon'

export class HashPokes {
  private pokemons: { [id: number]: Pokemon }

  constructor() {
    this.pokemons = {}
  }

  addPokemon(pokemon: Pokemon) {
    this.pokemons[pokemon.getId()] = pokemon
  }

  getPokemon(id: number): Pokemon | undefined {
    return this.pokemons[id]
  }

  removePokemon(id: number) {
    delete this.pokemons[id]
  }

  listPokemons(): Pokemon[] {
    return Object.values(this.pokemons)
  }

  load_pokemonList(): void {
    //name, type, pokeIndex, mount, bio, isFree, --historyRented--, id, priceperday
    let p1 = new Pokemon(
      'Flamejante',
      ['fire', 'flying'],
      6,
      'Aérea',
      'bio',
      true,
      1,
      300
    )
    this.addPokemon(p1)
    p1 = new Pokemon(
      'Nelson',
      ['grass', 'poison'],
      1,
      'Terrestre',
      'bio',
      true,
      2,
      250
    )
    this.addPokemon(p1)
    p1 = new Pokemon('Pika', ['electric'], 25, 'Aérea', 'bio', true, 3, 200)
    this.addPokemon(p1)
    p1 = new Pokemon('Josias', ['fire'], 4, 'Terrestre', 'bio', true, 4, 100)
    this.addPokemon(p1)
    p1 = new Pokemon(
      'Kim-Jong-Un',
      ['water'],
      7,
      'Aquática',
      'bio',
      true,
      5,
      150
    )
    this.addPokemon(p1)
    p1 = new Pokemon(
      'Kim-Jong-Il',
      ['fire'],
      4,
      'Terrestre',
      'bio',
      true,
      6,
      100
    )
    this.addPokemon(p1)
    p1 = new Pokemon(
      'Kim-Il-Sung',
      ['grass', 'poison'],
      1,
      'Terrestre',
      'bio',
      true,
      7,
      250
    )
    this.addPokemon(p1)
    p1 = new Pokemon(
      'Pidgey',
      ['normal', 'flying'],
      16,
      'Aérea',
      'bio',
      true,
      8,
      200
    )
    this.addPokemon(p1)
    p1 = new Pokemon(
      'Rattata',
      ['normal'],
      19,
      'Terrestre',
      'bio',
      true,
      9,
      100
    )
    this.addPokemon(p1)
    p1 = new Pokemon(
      'Spearow',
      ['normal', 'flying'],
      21,
      'Aérea',
      'bio',
      true,
      10,
      200
    )
    this.addPokemon(p1)
    p1 = new Pokemon('Ekans', ['poison'], 23, 'Terrestre', 'bio', true, 11, 150)
    this.addPokemon(p1)
    p1 = new Pokemon(
      'Pikachu',
      ['electric'],
      25,
      'Terrestre',
      'bio',
      true,
      12,
      200
    )
    this.addPokemon(p1)
    p1 = new Pokemon(
      'Sandshrew',
      ['ground'],
      27,
      'Terrestre',
      'bio',
      true,
      13,
      150
    )
    this.addPokemon(p1)
    p1 = new Pokemon(
      'Nidoran',
      ['poison'],
      29,
      'Terrestre',
      'bio',
      true,
      14,
      450
    )
    this.addPokemon(p1)
    p1 = new Pokemon('Clefairy', ['fairy'], 35, 'Aérea', 'bio', true, 15, 200)
    this.addPokemon(p1)
    p1 = new Pokemon('Vulpix', ['fire'], 37, 'Terrestre', 'bio', true, 16, 125)
    this.addPokemon(p1)
    p1 = new Pokemon(
      'Jigglypuff',
      ['normal', 'fairy'],
      39,
      'Aérea',
      'bio',
      true,
      17,
      200
    )
    this.addPokemon(p1)
    p1 = new Pokemon(
      'Zubat',
      ['poison', 'flying'],
      41,
      'Aérea',
      'bio',
      true,
      18,
      290
    )
    this.addPokemon(p1)
    p1 = new Pokemon(
      'Oddish',
      ['grass', 'poison'],
      43,
      'Terrestre',
      'bio',
      true,
      19,
      250
    )
    this.addPokemon(p1)
    p1 = new Pokemon(
      'Paras',
      ['bug', 'grass'],
      46,
      'Terrestre',
      'bio',
      true,
      20,
      205
    )
    this.addPokemon(p1)
    p1 = new Pokemon(
      'Venonat',
      ['bug', 'poison'],
      48,
      'Terrestre',
      'bio',
      true,
      21,
      150
    )
    this.addPokemon(p1)
  }
}
