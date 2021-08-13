import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../../profile.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Client } from '../../entities/client.entity';
import { Billing } from '../../entities/billing.entity';
import { User } from '../../entities/user.entity';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent implements OnInit {
  currentProfile?: User;

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
    address: new FormControl('', [Validators.required]),
    cardNumber: new FormControl('', [Validators.required, Validators.pattern(this.creditCardPattern)]),
    expiry: new FormControl('', Validators.required),
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

  get expiry() {
    return this.billingFormGroup.get('expiry');
  }

  constructor(private profileService: ProfileService, private toast: ToastrService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.profileService.getCurrentUserWithBilling().subscribe(
      (user) => {
        this.currentProfile = user;
        this.manageProfileFormGroup.controls['fullName'].setValue(user.UserName.replace('.', ' '));
        this.manageProfileFormGroup.controls['email'].setValue(user.Email);
        if (user.BillingInformation) {
          this.billingFormGroup.controls['nameOnCard'].setValue(user.BillingInformation.FullName);
          this.billingFormGroup.controls['address'].setValue(user.BillingInformation.Address);
          this.billingFormGroup.controls['cardNumber'].setValue(user.BillingInformation.CardNumber);
          this.billingFormGroup.controls['expiry'].setValue(user.BillingInformation.Expiry);
        }
      },
      (err) => {
        this.toast.error('Unable to laod the profile');
      }
    )
  }

  update() {
    const email = this.email?.value;
    const fullName = this.fullName?.value.trim().replace(/\s+/g,".");

    const nameOnCard = this.nameOnCard?.value;
    const address = this.address?.value;
    const cardNumber = this.cardNumber?.value;
    const expiry = this.expiry?.value;

    const billing = new Billing(0, nameOnCard, cardNumber, address, expiry);
    const user = new Client(email, fullName, billing);

    this.profileService.updateUser(user).subscribe(
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
