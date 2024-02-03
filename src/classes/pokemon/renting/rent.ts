class Rent{
    private pokemon: Pokemon;
    private user: User;
    private startDate: Date;
    private endDate: Date;
    private payment: Payment;
    private rentType: string;

    public constructor(pokemon: Pokemon, user: User, startDate: Date, endDate: Date, payment: Payment, rentType: string){
        this.pokemon = pokemon;
        this.user = user;
        this.startDate = startDate;
        this.endDate = endDate;
        this.payment = payment;
        this.rentType = rentType;
    }

    public extendEndDate(newDate: Date, endDate: Date){
        this.endDate = newDate;
    }

}