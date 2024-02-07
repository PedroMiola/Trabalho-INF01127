import { Employee } from './users/employees/employee'
import { HashEmployees } from './users/employees/hash_employees'
import { User } from './users/clients/user'
import { HashUsers } from './users/clients/hash_user'
import { Pokemon } from './pokemon/pokemon'
import { HashPokes } from './pokemon/hash_poke'
import { Manager } from './users/employees/manager'
import { UserVIP } from './users/clients/uservip'

export class Server {
  employees: HashEmployees
  users: HashUsers
  pokemons: HashPokes
  manager: Manager

  constructor() {
    this.employees = new HashEmployees()
    this.users = new HashUsers()
    this.pokemons = new HashPokes()
    this.manager = new Manager(
      'Pedro',
      22,
      12345678910,
      'pedro@gmail.com',
      'senha',
      1000
    )
  }

  listPokemons(): Pokemon[] {
    return this.pokemons.listPokemons()
  }

  listClients(): User[] {
    return this.users.listUsers()
  }

  listEmployees(): Employee[] {
    return this.employees.listEmployees()
  }

  addClient(user: User): void {
    this.users.addUser(user)
  }

  addEmployee(employee: Employee): void {
    this.employees.addEmployee(employee)
  }

  addPokemon(pokemon: Pokemon): void {
    this.pokemons.addPokemon(pokemon)
  }

  removePokemon(name: string): void {
    this.pokemons.removePokemon(name)
  }

  removeClient(email: string): void {
    this.users.removeUser(email)
  }

  removeEmployee(email: string): void {
    this.employees.removeEmployee(email)
  }

  approveLogin(email: string, password: string): boolean {
    return (
      this.manager.approveLoginManeger(email, password) ||
      this.employees.approveLogin(email, password) ||
      this.users.approveLogin(email, password)
    )
  }

  upgradeUserToVip(user: User): void {
    let userVIP = this.manager.upgradeUserToVip(user)
    this.users.removeUser(user.getEmail())
    this.users.addUser(userVIP)
  }

  downgradeVIPUser(user: UserVIP): void {
    let userNormal = this.manager.downgradeVIPUser(user)
    this.users.removeUser(user.getEmail())
    this.users.addUser(userNormal)
  }

  loadData(): void {
    this.employees.loadEmployees()
    this.users.loadUsers()
    this.pokemons.loadPokemonList()
    this.manager = new Manager(
      'Leticia',
      30,
      12345678910,
      'leticia@gmail.com',
      'senha',
      100000
    )
    this.users.listUsers().forEach(user => {
      let p1 = new Pokemon(
        'Clefairy',
        ['fairy'],
        35,
        'Aérea',
        'bio',
        true,
        15,
        200
      )
      user.rentPokemon(p1, 5, 'Helping')
      user.endRent(p1)
    })
  }
}
