import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth.service';
import { RegisterVM } from '../../entities/registerVM.entity';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  emailPattern = "^(?:[a-z]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*)+(@psu.edu)$";
  
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
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('')
  }, {validators: this.checkMatch});
  
  checkMatch(formGrp: AbstractControl) : ValidationErrors | null {
    let _original = formGrp.get('password');
    let _confirm = formGrp.get('confirmPassword');
    if (!_original || !_confirm) return null;
    return _original.value === _confirm.value ? null : { notSame: true };
  }

  constructor(private authService: AuthService, private toast: ToastrService, private router: Router) { }


  ngOnInit() {
  }

  register() {
    const fullName = this.fullName?.value;
    const email = this.email?.value;
    const password = this.password?.value;
    const registerVM = new RegisterVM(fullName, email, password);

    this.authService.registerClient(registerVM).subscribe(
      (success) => {
        this.toast.success('Registration Complete');
        this.router.navigate(['../Profile/ManageProfile']);
      },
      (error) => {
        this.toast.error('Error Registering this user');
      }
    )
  }

}


