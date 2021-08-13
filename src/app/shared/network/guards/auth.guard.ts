import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = localStorage.getItem('jwt') != null;
    const url = route.url.toString();
    if (url.toLowerCase().includes('auth')) {
      if (!isAuthenticated) {
        return true;
      }
      this.router.navigate(['']);
      return false;
    }
    else if (!isAuthenticated) {
      this.router.navigate(['/Auth/Login'])
      return false;
    }
    return true;
  }

}
