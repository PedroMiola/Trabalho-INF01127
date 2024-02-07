import { Pokemon } from '../pokemon'
import { User } from 'classes/users/clients/user'

export class Rent {
  private pokemon: Pokemon
  private user: User
  private startDate: Date
  private endDate: Date
  private rentType: string

  public constructor(
    pokemon: Pokemon,
    user: User,
    startDate: Date,
    endDate: Date,
    rentType: string
  ) {
    this.pokemon = pokemon
    this.user = user
    this.startDate = startDate
    this.endDate = endDate
    this.rentType = rentType
  }

  public getNumberOfDays() {
    return (
      (this.endDate.getTime() - this.startDate.getTime()) / (1000 * 3600 * 24)
    )
  }

  public extendEndDate(endDate: Date) {
    this.endDate = endDate
  }

  public getPokemon() {
    return this.pokemon
  }

  public getUser() {
    return this.user
  }

  public getStartDate() {
    return this.startDate
  }

  public getEndDate() {
    return this.endDate
  }

  public getRentType() {
    return this.rentType
  }
}
