class Payment {
    valueToPay: number;
    discount: number;

    constructor(valueToPay: number, discount: number = 0) {
        this.valueToPay = valueToPay;
        this.discount = discount;
        
    }
}