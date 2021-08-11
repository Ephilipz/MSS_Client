import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  manageProfileFormGroup: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  billingFormGroup: FormGroup = new FormGroup({
    nameOnCard: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    cardNumber: new FormControl('', Validators.required),
    CVC: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    expiry: new FormControl('', Validators.required),
  });

  get fullName() {
    return this.manageProfileFormGroup.get('fullName');
  }
  
  get email() {
    return this.manageProfileFormGroup.get('email');
  }

  get password() {
    return this.manageProfileFormGroup.get('password');
  }

  get nameOnCard() {
    return this.manageProfileFormGroup.get('nameOnCard');
  }

  get address() {
    return this.manageProfileFormGroup.get('address');
  }

  get cardNumber() {
    return this.manageProfileFormGroup.get('cardNumber');
  }

  get CVC() {
    return this.manageProfileFormGroup.get('CVC');
  }

  get expiry() {
    return this.manageProfileFormGroup.get('expiry');
  }

}
