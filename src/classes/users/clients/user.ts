import { Person } from '../person';
import { Pokemon } from 'classes/pokemon/pokemon';
import { Rent } from 'classes/pokemon/renting/rent';
import { Payment } from 'classes/pokemon/renting/payment';
export class User extends Person{
    private currentlyRentedPokemons: Rent[] = [];
    private debt: number = 0;
    private historyRentedPokemons: Rent[] = [];
    public vipStatus: boolean = false;

    constructor(name: string, age: number, cpf: number, email: string, password: string) {
        super(name, age, cpf, email, password);
        this.vipStatus = false;
    }

    rentPokemon(pokemon: Pokemon, days: number, rentType: string): void{
        let today = new Date();
        let endDate = new Date(today.getTime() + days * 24 * 60 * 60 * 1000);
        let price = pokemon.getPricePerDay() * days;
        let rent = new Rent(pokemon, this, today, endDate, new Payment(price), rentType);

        this.debt += price;
        this.addRent(rent);
        pokemon.addRent(rent);
    }

    getRentedPokemons(): Rent[]{
        return this.currentlyRentedPokemons;
    }

    getDebt(): number{
        return this.debt;
    }

    private addRent(rent: Rent): void{
        this.currentlyRentedPokemons.push(rent);
        this.historyRentedPokemons.push(rent);
    }

    isVip(): boolean{
        return this.vipStatus;
    }

    returnPokemon(pokemon: Pokemon): boolean{
        if(this.debt === 0){
            let rent = this.currentlyRentedPokemons.find(item => item.getPokemon() === pokemon);
            this.currentlyRentedPokemons = this.currentlyRentedPokemons.filter(item => item !== rent);
            return true;
        }
        return false;
    }

    payDebt(creditCardNumber: number, password: number): void{
        let payment = new Payment(this.debt);
        if(payment.approvePayment(creditCardNumber, password)){
            this.debt = 0;
        }
    }
}