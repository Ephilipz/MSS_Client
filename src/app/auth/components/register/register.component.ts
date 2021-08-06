import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFormGroup!: FormGroup;
  
  constructor(private authService: AuthService) { }
  

  ngOnInit(){
  
    this.registerFormGroup = new FormGroup({
      'fullName' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, Validators.required),
      'confirmPassword' : new FormControl(null, Validators.required)
       
    });
  }

}
