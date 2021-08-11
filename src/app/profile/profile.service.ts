import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './entities/user.entity';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { 
  }
  
  public Update(user: User){
    return this.http.post(environment.baseUrl + "Profile", user);
  }
}
