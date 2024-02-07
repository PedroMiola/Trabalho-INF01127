import { Person } from '../person';
export class Employee extends Person{
    paymentVal: number;

constructor(name: string, age: number, cpf: number, email: string, password: string, paymentVal: number) {
        super(name, age, cpf, email, password);
        this.paymentVal = paymentVal;
    }

//registerUser(person: Person): User{}

//addPoke(): bool{}

//removePoke(): bool{}

//editPoke(): bool{}

//returnPoke(): Pokemon{}
}