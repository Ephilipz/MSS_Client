import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './entities/user.entity';
import { Billing } from './entities/billing.entity';
import { Client } from './entities/client.entity';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { 
  }
  
  public Update(user: Client){
    return this.http.post(environment.baseUrl + "Profile", user);
  }
}
