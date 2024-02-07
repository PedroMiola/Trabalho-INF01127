import { User } from './user'

export class HashUsers {
  private users: { [email: string]: User }

  constructor() {
    this.users = {}
  }

  addUser(user: User) {
    this.users[user.getEmail()] = user
  }

  getUser(email: string): User | undefined {
    return this.users[email]
  }

  removeUser(email: string) {
    delete this.users[email]
  }

  listUsers(): User[] {
    return Object.values(this.users)
  }

  loadUsers(): void {
    let u1 = new User('Ana Silva', 25, 987654321, 'ana@gmail.com', 'senha123')
    this.addUser(u1)

    let u2 = new User(
      'Bruno Santos',
      30,
      123456789,
      'bruno@gmail.com',
      'senha456'
    )
    this.addUser(u2)

    let u3 = new User(
      'Carolina Pereira',
      22,
      456789123,
      'carolina@gmail.com',
      'segurasenha'
    )
    this.addUser(u3)

    let u4 = new User(
      'Daniel Lima',
      28,
      654321987,
      'daniel@gmail.com',
      'user123'
    )
    this.addUser(u4)

    let u5 = new User(
      'Eduarda Costa',
      35,
      321654987,
      'eduarda@gmail.com',
      'senhasecreta'
    )
    this.addUser(u5)
  }

  approveLogin(email: string, password: string): boolean {
    const user = this.getUser(email)
    return user ? user.approveLogin(password) : false
  }
}
