import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../../profile.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Client } from '../../entities/client.entity';
import { Billing } from '../../entities/billing.entity';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent implements OnInit {
  addressPattern = "^(\\d+\\s(?:[A-Za-z0-9.-]+\\s?)+(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St)\,\\s[A-Za-z]+,\\s[A-Z]{2}\\s\\d{4,10})$"
  emailPattern = "^(?:[a-z]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*)+(@psu.edu)$";
  //using MasterCard: begin with 51-55 and length from 16-19
  //using Visa: begin with 4 and length from 13-16
  creditCardPattern = "^(?:4[0-9]{12,15})|(?:5[1-5][0-9]{14,17})$";
  cvcPattern = "^(?:[0-9]{3})$";
  expiryPattern = "^(?:((0[0-9])|(1[0-2]))\/([0-9]{2}))$";

  manageProfileFormGroup: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
  });

  billingFormGroup: FormGroup = new FormGroup({
    nameOnCard: new FormControl('', Validators.required),
    address: new FormControl('', [Validators.required, Validators.pattern(this.addressPattern)]),
    cardNumber: new FormControl('', [Validators.required, Validators.pattern(this.creditCardPattern)]),
    CVC: new FormControl('', [Validators.required, Validators.pattern(this.cvcPattern)]),
    expiry: new FormControl('',[Validators.required, Validators.pattern(this.expiryPattern)]),
  });

  
  get fullName() {
    return this.manageProfileFormGroup.get('fullName');
  }

  get email() {
    return this.manageProfileFormGroup.get('email');
  }

  get nameOnCard() {
    return this.billingFormGroup.get('nameOnCard');
  }

  get address() {
    return this.billingFormGroup.get('address');
  }

  get cardNumber() {
    return this.billingFormGroup.get('cardNumber');
  }

  get cvc() {
    return this.billingFormGroup.get('CVC');
  }

  get expiry() {
    return this.billingFormGroup.get('expiry');
  }

  constructor(private profileService: ProfileService, private toast: ToastrService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void { }

  update() {
    const email = this.email?.value;
    const fullName = this.fullName?.value.trim().replace(/\s+/g,".");

    const nameOnCard = this.nameOnCard?.value;
    const address = this.address?.value;
    const cardNumber = this.cardNumber?.value;
    const cvc = this.cvc?.value;
    const expiry = this.expiry?.value;

    const billing = new Billing(0, nameOnCard, cardNumber, address, cvc, expiry);
    const user = new Client(email, fullName, billing);

    this.profileService.Update(user).subscribe(
      (success) => {
        this.toast.success('Updated');
        this.router.navigate(['../Reservation/CalendarView']);
      },
      (error) => {
        this.toast.error('Error Updating this user');
      }
    )

  }


}
