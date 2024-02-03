class HashPokes {
    private pokemons: { [id : number]: Pokemon };

    constructor() {
        this.pokemons = {};
    }

    addPokemon(pokemon: Pokemon) {
        this.pokemons[pokemon.getId()] = pokemon;
    }

    getPokemon(id: number): Pokemon | undefined {
        return this.pokemons[id];
    }

    removePokemon(id: number) {
        delete this.pokemons[id];
    }

    listPokemons(): Pokemon[] {
        return Object.values(this.pokemons);
    }

    load_pokemonList(): void{
        //name, type, species, pokeIndex, mountType, minAge, biography, price, isFree, historyRented, id, pricePerDay
        let p1 = new Pokemon("Laura", ["water", "ice"], "Lapras", 131, "Aquática", 0, "bio", true, [], 1, 200);
        this.addPokemon(p1);
        p1 = new Pokemon("Foguinho", ["fire", "flying"], "Charizard", 6, "Voadora", 0, "bio", true, [], 2, 150);
        this.addPokemon(p1);
        p1 = new Pokemon("Diogo", ["electric", ""], "Pikachu", 25, "Elétrica", 0, "bio", true, [], 3, 220);
        this.addPokemon(p1);
        p1 = new Pokemon("Mestre", ["water", ""], "Gyarados", 130, "Aquática", 0, "bio", true, [], 4, 300);
        this.addPokemon(p1);
        p1 = new Pokemon("Luke", ["normal", ""], "Tauros", 128, "Terrestre", 0, "bio", true, [], 5, 200);
        this.addPokemon(p1);
        p1 = new Pokemon("Giovanni", ["ground", ""], "Rhydon", 112, "Terrestre", 0, "bio", true, [], 6, 250);
        this.addPokemon(p1);
        p1 = new Pokemon("Misty", ["water", "psychic"], "Starmie", 121, "Aquática", 0, "bio", true, [], 7, 205);
        this.addPokemon(p1);
        p1 = new Pokemon("Bruce", ["water", "dark"], "Sharpedo", 319, "Aquática", 0, "bio", true, [], 8, 50);
        this.addPokemon(p1);
        p1 = new Pokemon("Lance", ["dragon", "flying"], "Dragonite", 149, "Voadora", 0, "bio", true, [], 9, 200);
        this.addPokemon(p1);
        p1 = new Pokemon("Erika", ["grass", "poison"], "Vileplume", 45, "Terrestre", 0, "bio", true, [], 10, 125);
    }
}
