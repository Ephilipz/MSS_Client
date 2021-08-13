import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './entities/user.entity';
import { Client } from './entities/client.entity';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly baseUrl = environment.baseUrl + "Profile";
  constructor(private http: HttpClient) {
  }

  public updateUser(user: Client) {
    return this.http.post(this.baseUrl, user);
  }

  public getUsers() {
    return this.http.get<Array<User>>(this.baseUrl);
  }

  public getUser(id: number) {
    return this.http.get<User>(this.baseUrl + `\{id}`);
  }

  public getCurrentUserWithBilling() {
    return this.http.get<Client>(this.baseUrl + "/GetCurrentUserWithBilling");
  }

  public checkIsAdmin() {
    return this.http.get(this.baseUrl + "/isAdmin");
  }


}
