export class FormConstants{
    public static readonly emailPattern = "^(?:[a-z]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*)+(@psu.edu)$";
    //using MasterCard: begin with 51-55 and length from 16-19
    //using Visa: begin with 4 and length from 13-16
    public static readonly creditCardPattern = "^(?:4[0-9]{12,15})|(?:5[1-5][0-9]{14,17})$";
    public static readonly cvcPattern = "^(?:[0-9]{3})$";
    public static readonly expiryPattern = "^(?:((0[0-9])|(1[0-2]))\/([0-9]{2}))$";
}