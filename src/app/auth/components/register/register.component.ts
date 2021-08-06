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

  registerFormGroup: FormGroup = new FormGroup({
    fullName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl(null, [Validators.required]),
  });
  
  constructor(private authService: AuthService, private toast: ToastrService) { }

  ngOnInit(): void {
  }

  register(){
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
