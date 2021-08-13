export class Room {
    Id: number;
    IsSpecial: boolean;

    constructor(Id: number = 0, IsSpecial: boolean = false) {
        this.Id = Id;
        this.IsSpecial = IsSpecial;
    }
}