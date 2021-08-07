import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  get userName(){
    return this.loginFormGroup.get('userName')
  }

  get password(){
    return this.loginFormGroup.get('password')
  }

  loginFormGroup: FormGroup = new FormGroup({
    userName : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
  }
  
  );


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
