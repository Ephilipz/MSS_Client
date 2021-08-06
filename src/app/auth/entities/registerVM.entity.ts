export class RegisterVM {
    FullName: string;
    Email: string;
    Password: string;
    constructor(FullName: string, Email: string, Password: string) {
        this.FullName = FullName;
        this.Email = Email;
        this.Password = Password;
    }

}