class Pokemon {
    private name: string;
    private type: [string, string];
    private species: string;
    private pokeIndex: number;
    private mountType: string;
    private minAge: number;
    private biography: string;
    private price: number;
    private isFree: boolean;
    private historyRented: Rent[];
    private id: bigint;
    private pricePerDay: number;

    public constructor(name: string, type: [string, string], species: string, pokeIndex: number,
        mountType: string, minAge: number, biography: string, price: number, isFree: boolean, 
        historyRented: Rent[], id: bigint, pricePerDay: number) {
        this.name = name;
        this.type = type;
        this.species = species;
        this.pokeIndex = pokeIndex;
        this.mountType = mountType;
        this.minAge = minAge;
        this.biography = biography;
        this.price = price;
        this.isFree = isFree;
        this.historyRented = historyRented;
        this.id = id;
        this.pricePerDay = pricePerDay;
    }

    public getTimesUsed(): number {//smh a gente botou como privado no diagrama do relatório 2
        return this.historyRented.length;
    }

    getPricePerDay(): number {
        return this.pricePerDay;
    }

    addRent(rent: Rent): void {
        this.historyRented.push(rent);
    }

}
