import { User } from "./user.entity";

export class Administrator extends User{
    AdminId: number;
    constructor(email: string, pass: string, fullName: string, AdminId: number){
        super(email, pass, fullName);
        this.AdminId = AdminId;
    }
}