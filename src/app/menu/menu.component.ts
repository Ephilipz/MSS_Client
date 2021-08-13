import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private profileService: ProfileService, private authService: AuthService, private toast: ToastrService) { }

  isAdmin: boolean = false;
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();

    if (!this.isLoggedIn)
      return;
      
    this.profileService.checkIsAdmin().subscribe(
      (res: any) => {
        this.isAdmin = res.isAdmin;
      },
      (err) => this.toast.error('unable to check admin status')
    );
  }

  logout() {
    this.authService.logout().subscribe(
      (success) => {
        window.location.reload();
      },
      (err) => {
        window.location.reload();
      },
    )
  }

}
