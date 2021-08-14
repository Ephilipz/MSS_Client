import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Room } from './entities/room.entity';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl = environment.baseUrl + 'Room'

  public getRooms() {
    return this.http.get<Array<Room>>(this.baseUrl);
  }

  public getRoom(Id: number) {
    return this.http.get<Room>(this.baseUrl + `/${Id}`);
  }

  public createRoom(room: Room) {
    return this.http.post<any>(this.baseUrl, room);
  }

  public deleteRoom(id: number) {
    return this.http.delete<any>(this.baseUrl + `/${id}`);
  }

  public getAvailableRoomsInTimeSlot(StartDate: Date, EndDate: Date) {
    this.http.get<Array<Room>>(this.baseUrl + `/${StartDate}/${EndDate}`);
  }
}