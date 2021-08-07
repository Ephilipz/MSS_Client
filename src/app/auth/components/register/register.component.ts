import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  get fullName(){
    return this.registerFormGroup.get('fullName')
  }
  
  get email(){
    return this.registerFormGroup.get('email')
  }

  get password(){
    return this.registerFormGroup.get('password')
  }

  get confirmPassword(){
    return this.registerFormGroup.get('confirmPassword')
  }
  
  registerFormGroup!: FormGroup;
  
  constructor(private authService: AuthService) { }
  

  ngOnInit(){
  
    this.registerFormGroup = new FormGroup({
      fullName : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', Validators.required),
      confirmPassword : new FormControl('', Validators.required)  
    }
    
    );
  }

  save(model:UserVerificationRequirement, isValid: boolean) {
    console.log(model,isValid);

  }

}


