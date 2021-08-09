import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth.service';
import { LoginVM } from '../../entities/loginVM.entity';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailPattern = "^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*)+(@psu.edu)$";

  get email() {
    return this.loginFormGroup.get('email')
  }

  get password() {
    return this.loginFormGroup.get('password')
  }

  loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', Validators.required),
  }

  );


  constructor(private authService: AuthService, private toast: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const email = this.email?.value;
    const password = this.password?.value;

    const loginVM = new LoginVM(email, password);

    this.authService.login(loginVM).subscribe(
      (success) => {
        this.toast.success('Welcome');
        this.router.navigate(['../Reservation/CalendarView']);
      },
      (error) => {
        this.toast.error('Error Registering this user');
      }
    )
  }
}
