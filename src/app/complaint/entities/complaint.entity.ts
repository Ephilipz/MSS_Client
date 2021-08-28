import { User } from "src/app/profile/entities/user.entity";
import { ComplaintStatus } from "../enums/complaintStatus.enums";

export class Complaint{
    User: User; 
    Complaint: String;
    Status: ComplaintStatus;

    constructor(user: User, complaint: String, status: ComplaintStatus){
        this.User= user; 
        this.Complaint= complaint;
        this.Status= status;
    }
}