import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterVM } from './entities/registerVM.entity';
import { RegisterAdminVM } from './entities/registerAdminVM.entity';
import { LoginVM } from './entities/loginVM.entity';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) {
  }
  
  public registerClient(registerVM: RegisterVM) {
    return this.http.post(environment.baseUrl + 'Auth/RegisterClient', registerVM);
  }
  
  public registerAdmin(registerVM: RegisterAdminVM) {
    return this.http.post(environment.baseUrl + 'Auth/RegisterAdmin', registerVM);
  }
  
  public login(loginVM: LoginVM) {
    return this.http.post(environment.baseUrl + 'Auth/Login', loginVM);
  }
}
