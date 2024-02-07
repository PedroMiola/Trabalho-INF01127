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

  loadUsers(users: User[]) {}

  approveLogin(email: string, password: string): boolean {
    const user = this.getUser(email)
    return user ? user.approveLogin(password) : false
  }
}
