import { User } from "./user.entity";

export class Administrator extends User{
    AdminId: number;
    Pass: string;
    constructor(email: string, pass: string, fullName: string, AdminId: number){
        super(email, fullName);
        this.AdminId = AdminId;
        this.Pass= pass;
    }
}