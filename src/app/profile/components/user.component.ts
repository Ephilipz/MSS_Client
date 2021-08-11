export class User{
    Email: string;
    Password: string;
    FullName: string;
    NameOnCard: string;
    Address: string;
    CardNumber: string;
    CVC: string;
    Expiry: string;

    constructor(Email: string,
        Password: string,
        FullName: string,
        NameOnCard: string,
        Address: string,
        CardNumber: string,
        CVC: string,
        Expiry: string)
    {
        this.Email= Email; 
        this.Password= Password; 
        this.FullName= FullName; 
        this.NameOnCard= NameOnCard; 
        this.Address= Address; 
        this.CardNumber= CardNumber; 
        this.CVC= CVC; 
        this.Expiry= Expiry;
    }
}