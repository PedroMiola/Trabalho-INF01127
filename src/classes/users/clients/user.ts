import { Person } from '../person'
import { Pokemon } from 'classes/pokemon/pokemon'
import { Rent } from 'classes/pokemon/renting/rent'

export class User extends Person {
  private currentlyRentedPokemons: Rent[] = []
  private historyRentedPokemons: Rent[] = []
  public vipStatus: boolean = false

  constructor(
    name: string,
    age: number,
    cpf: number,
    email: string,
    password: string
  ) {
    super(name, age, cpf, email, password)
    this.vipStatus = false
  }

  rentPokemon(pokemon: Pokemon, days: number, rentType: string): void {
    if (pokemon.isFree()) {
      let today = new Date()
      let endDate = new Date(today.getTime() + days * 24 * 60 * 60 * 1000)
      let rent = new Rent(pokemon, this, today, endDate, rentType)

      this.addRent(rent)
      pokemon.addRent()
      pokemon.free = false
    }
  }

  endRent(pokemon: Pokemon): void {
    let rent = this.currentlyRentedPokemons.find(
      rentItem => rentItem.getPokemon() === pokemon
    )

    if (rent === undefined) {
      throw new Error('This pokemon is not rented by this user')
    }

    pokemon.endRent(rent)
    this.historyRentedPokemons.push(rent)
    this.currentlyRentedPokemons = this.currentlyRentedPokemons.filter(
      item => item !== rent
    )
  }

  getRentedPokemons(): Rent[] {
    return this.currentlyRentedPokemons
  }

  private addRent(rent: Rent): void {
    this.currentlyRentedPokemons.push(rent)
  }

  isVip(): boolean {
    return this.vipStatus
  }

  getNumberOfCurrentlyRentedPokemons(): number {
    return this.currentlyRentedPokemons.length
  }

  getNuberOfHistoryRentedPokemons(): number {
    return this.historyRentedPokemons.length
  }

  getTimeOfRentedPokemons(): number {
    let time = 0
    this.historyRentedPokemons.forEach(item => {
      time += item.getNumberOfDays()
    })
    return time
  }

  getFavoritePokemon(): Pokemon {
    let pokemons = this.historyRentedPokemons.map(item => item.getPokemon())
    let favoritePokemon = pokemons.reduce((prev, current) =>
      prev.getNumberOfRentsByUser(this) > current.getNumberOfRentsByUser(this)
        ? prev
        : current
    )
    return favoritePokemon
  }
}
