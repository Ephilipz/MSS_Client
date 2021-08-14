import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth.service';
import { RegisterAdminVM } from '../../entities/registerAdminVM.entity';
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

  get adminId() {
    return this.registerFormGroup.get('adminId');
  }


  registerFormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl(''),
    adminId: new FormControl('', [Validators.minLength(4), Validators.maxLength(4)])
  }, { validators: this.checkMatch });

  checkMatch(formGrp: AbstractControl): ValidationErrors | null {
    let _original = formGrp.get('password');
    let _confirm = formGrp.get('confirmPassword');
    if (!_original || !_confirm) return null;
    return _original.value === _confirm.value ? null : { notSame: true };
  }

  constructor(private authService: AuthService, private toast: ToastrService, private router: Router) { }


  ngOnInit() {
  }

  register() {
    const adminId = this.adminId?.value;

    if (adminId) {
      this.registerAdmin();
    }

    else if (!adminId) {
      this.registerClient()
    }
  }

  private registerAdmin() {
    const fullName = this.fullName?.value;
    const email = this.email?.value;
    const password = this.password?.value;
    const adminId = this.adminId?.value;
    const registerVM = new RegisterAdminVM(fullName, email, password, adminId);

    this.authService.registerAdmin(registerVM).subscribe(
      (success) => {
        this.toast.success('Registration Complete');
        this.router.navigate(['../Room']);
        location.reload();
      },
      (error) => {
        this.toast.error('Error : ' + error?.error?.modelError[0]);
      }
    )
  }

  private registerClient() {
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
        this.toast.error('Error : ' + error?.error?.modelError[0]);
      }
    )

  }

}