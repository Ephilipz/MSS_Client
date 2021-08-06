import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterVM } from './entities/registerVM.entity';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public registerClient(registerVM: RegisterVM) {
    return this.http.post(environment.baseUrl + 'Auth/RegisterClient', registerVM);
  }
}
