class Adoption{
    private pokemon: Pokemon;
    private startTime: Date;

    constructor(pokemon: Pokemon){
        this.pokemon = pokemon;
        this.startTime = new Date();
    }

    public getAdoptionTime(){
        return this.startTime;
    }

    public getPokemon(){
        return this.pokemon;
    }
}