import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterVM } from './entities/registerVM.entity';
import { RegisterAdminVM } from './entities/registerAdminVM.entity';
import { LoginVM } from './entities/loginVM.entity';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  public registerClient(registerVM: RegisterVM) {
    return this.http.post<any>(environment.baseUrl + 'Auth/RegisterClient', registerVM)
      .pipe(
        tap((res) => this.addJWTToLocalStorage(res.token))
      );
  }

  public registerAdmin(registerVM: RegisterAdminVM) {
    return this.http.post<any>(environment.baseUrl + 'Auth/RegisterAdmin', registerVM)
      .pipe(
        tap((res) => this.addJWTToLocalStorage(res.token))
      );
  }

  public login(loginVM: LoginVM) {
    return this.http.post<any>(environment.baseUrl + 'Auth/Login', loginVM)
      .pipe(
        tap((res) => this.addJWTToLocalStorage(res.token)),
        catchError(err => throwError(err))
      );
  }

  public logout() {
    localStorage.clear();
    return this.http.get(environment.baseUrl + 'Auth/Logout');
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('jwt') != null;
  }

  private addJWTToLocalStorage(jwt: string) {
    localStorage.setItem('jwt', jwt);
  }

  public getJWT() {
    return localStorage.getItem('jwt');
  }

}
