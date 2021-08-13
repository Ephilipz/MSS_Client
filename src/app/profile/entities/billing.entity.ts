
export class Billing {
    Id: number;
    FullName: string;
    CardNumber: string;
    Expiry: string;
    Address: string;

    constructor(Id: number = 0, FullName: string = '', CardNumber: string = '', Address: string = '',Expiry: string = '') {
        this.Id = Id;
        this.FullName = FullName;
        this.CardNumber = CardNumber;
        this.Expiry = Expiry;
        this.Address = Address;
    }
}