class User extends Person{
    private currentlyRentedPokemons: Rent[] = [];
    private debt: number = 0;
    private historyRentedPokemons: Rent[] = [];

    constructor(name: string, age: number, cpf: number, email: string, password: string) {
        super(name, age, cpf, email, password);
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

}