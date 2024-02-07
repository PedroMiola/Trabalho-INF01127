import { speciesNames } from 'dictionaries/species'
import { validPokemonTypes } from 'dictionaries/types'
import { Rent } from './renting/rent'
import { User } from 'classes/users/clients/user'

export class Pokemon {
  name: string
  type: string[]
  pokeIndex: number
  mountType: string
  biography: string
  //price: number; //pq tem price e price per day ainda ?
  free: boolean //isAvailable
  historyRented: Rent[]
  id: number
  pricePerDay: number

  constructor(
    name: string,
    type: string[],
    pokeIndex: number,
    mountType: string,
    biography: string,
    free: boolean,
    id: number,
    pricePerDay: number
  ) {
    this.name = name
    this.type = type
    this.pokeIndex = pokeIndex
    this.mountType = mountType
    this.biography = biography
    //this.price = price;
    this.free = free
    this.historyRented = []
    this.id = id
    this.pricePerDay = pricePerDay
  }

  getTimesUsed(): number {
    //smh a gente botou como privado no diagrama do relatório 2
    return this.historyRented.length
  }

  getPricePerDay(): number {
    return this.pricePerDay
  }

  addRent(): void {
    this.setFree(false)
  }

  public endRent(rent: Rent): void {
    this.historyRented.push(rent)
    this.setFree(true)
  }

  getId(): number {
    return this.id
  }

  getMinAge(): number {
    if (this.mountType == 'Aquático') {
      return 14
    }
    if (this.mountType == 'Terrestre') {
      return 12
    }
    if (this.mountType == 'Aérea') {
      return 18
    } else {
      return 10
    }
  }

  getSpecies(): string {
    return speciesNames[this.pokeIndex]
  }

  getImage(): string {
    const formattedIndex = this.pokeIndex.toString().padStart(4, '0')
    const imagePath = require(`assets/images/${formattedIndex}.png`)
    return imagePath
  }

  getBio(): string {
    return this.biography
  }

  getName(): string {
    return this.name
  }

  getTypeImage(): string[] {
    const images: string[] = []

    const type1Image = this.getImageForType(this.type[0])
    images.push(type1Image)
    if (this.type.length > 1) {
      if (
        this.type[0] !== this.type[1] &&
        this.type[1] !== '' &&
        this.type[1].toLowerCase() !== 'null' &&
        validPokemonTypes[this.type[1].toLowerCase()] === true
      ) {
        const type2Image = this.getImageForType(this.type[1])
        images.push(type2Image)
      }
    }
    return images
  }

  private getImageForType(type: string): string {
    const formattedType = type.toLowerCase()
    const image = require(`assets/images/${formattedType}.png`)
    return image
  }

  public getNumberOfRentsByUser(user: User): number {
    let count = 0
    for (let i = 0; i < this.historyRented.length; i++) {
      if (this.historyRented[i].getUser() === user) {
        count++
      }
    }
    return count
  }

  public isFree(): boolean {
    return this.free
  }

  public setFree(free: boolean): void {
    this.free = free
  }
}
