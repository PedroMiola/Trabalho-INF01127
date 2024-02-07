import { Pokemon } from '../pokemon';
import { User } from 'classes/users/clients/user';
import { Payment } from './payment';

export class Rent{
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

    public extendEndDate(endDate: Date){
        this.endDate = endDate;
    }

    public getPokemon(){
        return this.pokemon;
    }

    public getUser(){
        return this.user;
    }

    public getStartDate(){
        return this.startDate;
    }

    public getEndDate(){
        return this.endDate;
    }

    public getPayment(){
        return this.payment;
    }

    public getRentType(){
        return this.rentType;
    }

}