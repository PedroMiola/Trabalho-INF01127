import { User } from './user';
import { Adoption } from 'classes/pokemon/adoption';
export class UserVIP extends User {
    private adopetdPoke: Adoption[] = [];

    constructor(name: string, age: number, cpf: number, email: string, password: string) {
        super(name, age, cpf, email, password);
        this.vipStatus = true;
    }

    public adoptPokemon(pokemon: Adoption): void {
        this.adopetdPoke.push(pokemon);
    }

}