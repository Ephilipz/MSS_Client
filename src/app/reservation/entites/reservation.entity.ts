import { User } from "src/app/profile/entities/user.entity";
import { Room } from "src/app/room/entities/room.entity";

export class Reservation {
    Id: number;
    User: any;
    Room?: Room;
    StartDateTime: Date;
    EndDateTime: Date;
    Participants: string;

    constructor(Id: number,
        User: User,
        Room: Room,
        StartDateTime: Date,
        EndDateTime: Date,
        Participants: Array<any> = []) {
        this.Id = Id;
        this.User = User;
        this.Room = Room;
        this.StartDateTime = StartDateTime;
        this.EndDateTime = EndDateTime;
        this.Participants = Participants.join(',');
    }
}