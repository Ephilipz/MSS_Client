import { RegisterVM } from "./registerVM.entity";

export class RegisterAdminVM extends RegisterVM{
    AdminId: number;
    constructor(FullName: string, Email: string, Password: string, AdminId: number){
        super(FullName, Email, Password);
        this.AdminId = AdminId;
    }
}