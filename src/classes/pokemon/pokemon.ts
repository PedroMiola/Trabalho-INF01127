class Pokemon {
    name: string;
    type: [string, string];
    species: string;
    pokeIndex: number;
    mountType: string;
    minAge: number;
    biography: string;
    //price: number; //pq tem price e price per day ainda ?
    isFree: boolean; //isAvailable
    historyRented: Rent[];
    id: number;
    pricePerDay: number;        

    constructor(name: string, type: [string, string], species: string, pokeIndex: number,
        mountType: string, minAge: number, biography: string, isFree: boolean, 
        historyRented: Rent[], id: number, pricePerDay: number) {
        this.name = name;
        this.type = type;
        this.species = species;
        this.pokeIndex = pokeIndex;
        this.mountType = mountType;
        this.minAge = minAge;
        this.biography = biography;
        //this.price = price;
        this.isFree = isFree;
        this.historyRented = historyRented;
        this.id = id;
        this.pricePerDay = pricePerDay;
    }

    getTimesUsed(): number {//smh a gente botou como privado no diagrama do relatório 2
        return this.historyRented.length;
    }

    getPricePerDay(): number {
        return this.pricePerDay;
    }

    addRent(rent: Rent): void {
        this.historyRented.push(rent);
    }

    getId(): number{
        return this.id;
    }

}
