import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth.service';
import { RegisterVM } from '../../entities/registerVM.entity';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  get fullName() {
    return this.registerFormGroup.get('fullName');
  }

  get email() {
    return this.registerFormGroup.get('email');
  }

  get password() {
    return this.registerFormGroup.get('password');
  }

  get confirmPassword() {
    return this.registerFormGroup.get('confirmPassword');
  }

  registerFormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService, private toast: ToastrService) { }


  ngOnInit() {
  }

  save(model: UserVerificationRequirement, isValid: boolean) {
    console.log(model, isValid);

  }

  register() {
    const fullName = this.registerFormGroup.controls['fullName'].value;
    const email = this.registerFormGroup.controls['email'].value;
    const password = this.registerFormGroup.controls['password'].value;
    const registerVM = new RegisterVM(fullName, email, password);

    this.authService.registerClient(registerVM).subscribe(
      (success) => {
        this.toast.success('Registration Complete');
      },
      (error) => {
        this.toast.error('Error Registering this user');
      }
    )
  }

}


