export class User {
    Email: string;
    UserName: string;

    constructor(Email: string,
        FullName: string) {
        this.Email = Email;
        this.UserName = FullName;
    }
}