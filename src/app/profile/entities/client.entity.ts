import { Billing } from "./billing.entity";
import { User } from "./user.entity";

export class Client extends User {
    BillingInformation?: Billing;

    constructor(email: string, fullName: string, BillingInformation?: Billing) {
        super(email, fullName);
        this.BillingInformation = BillingInformation;
    }
}