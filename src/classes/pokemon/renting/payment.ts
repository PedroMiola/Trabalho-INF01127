class Payment {
    valueToPay: number;
    discount: number;

    constructor(valueToPay: number, discount: number = 0) {
        this.valueToPay = valueToPay;
        this.discount = discount;  
    }

    getValueToPay(): number {
        return this.valueToPay;
    }
    
    getDiscount(): number {
        return this.discount;
    }

    approvePayment(creditCardNumber: number, password: number): boolean {
        return true;
    }
    
    setDiscount(discount: number): void {
        this.discount = discount;
    }
}