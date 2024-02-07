import { Employee } from './employee'

export class HashEmployees {
  private employees: { [email: string]: Employee }

  constructor() {
    this.employees = {}
  }

  addEmployee(employee: Employee) {
    this.employees[employee.getEmail()] = employee
  }

  getEmployee(email: string): Employee | undefined {
    return this.employees[email]
  }

  removeEmployee(email: string) {
    delete this.employees[email]
  }

  listEmployees(): Employee[] {
    return Object.values(this.employees)
  }

  //   name: string,
  //   age: number,
  //   cpf: number,
  //   email: string,
  //   password: string,
  //   paymentVal: number
  loadEmployees(employees: Employee[]) {
    let e1 = new Employee(
      'Pedro Poli',
      22,
      123456789,
      'poli@gmail.com',
      '123456',
      1000
    )
    this.addEmployee(e1)

    e1 = new Employee(
      'João Zata',
      22,
      123456789,
      'joao@gmail.com',
      '89745456',
      2000
    )
    this.addEmployee(e1)

    let e2 = new Employee(
      'Maria Silva',
      28,
      987654321,
      'maria@gmail.com',
      'password123',
      1500
    )
    this.addEmployee(e2)

    let e3 = new Employee(
      'Carlos Oliveira',
      30,
      456789123,
      'carlos@gmail.com',
      'pass123',
      1800
    )
    this.addEmployee(e3)

    let e4 = new Employee(
      'Ana Souza',
      25,
      654321987,
      'ana@gmail.com',
      'securepass',
      1200
    )
    this.addEmployee(e4)
  }
  approveLogin(email: string, password: string): boolean {
    const employee = this.getEmployee(email)
    return employee ? employee.approveLogin(password) : false
  }
}
