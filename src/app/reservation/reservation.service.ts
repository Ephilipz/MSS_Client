import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reservation } from './entites/reservation.entity';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly baseURL = environment.baseUrl + 'Reservation';

  constructor(private http: HttpClient) {
  }

  public getAllReservations() {
    return this.http.get<Array<Reservation>>(this.baseURL);
  }

  public getReservations() {
    return this.http.get<Array<Reservation>>(this.baseURL + '/GetReservationsForUser');
  }

  public getReservation(id: number) {
    return this.http.get<Reservation>(this.baseURL + `/${id}`);
  }

  public createReservation(reservation: Reservation) {
    return this.http.post<any>(this.baseURL, reservation);
  }

  public updateReservation(reservation: Reservation) {
    return this.http.put<any>(this.baseURL, reservation);
  }
}
