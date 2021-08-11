import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../../profile.service';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from '../user.component';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent implements OnInit {
  emailPattern = "^(?:[a-z]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*)+(@psu.edu)$";
  //using MasterCard: begin with 51-55 and length from 16-19
  //using Visa: begin with 4 and length from 13-16
  creditCardPattern = "^(?:4[0-9]{12,15})|(?:5[1-5][0-9]{14,17})$";
  cvcPattern = "^(?:[0-9]{3})$";
  expiryPattern = "^(?:((0[0-9])|(1[0-2]))\/([0-9]{2}))$";

  Name: string = ""; 
  Email: string = "";
  NameOnCard: string = "";
  Address: string ="";
  CardNumber: string = "";
  CVC: string = ""; 
  Expiry: string ="";
  
  get fullName() {
    return this.manageFormGroup.get('fullName');
  }
  
  get email() {
    return this.manageFormGroup.get('email');
  }
  
  get password() {
    return this.manageFormGroup.get('password');
  }

  get nameOnCard(){
    return this.manageFormGroup.get('nameOnCard');
  }

  get address(){
    return this.manageFormGroup.get('address');
  }

  get cardNumber(){
    return this.manageFormGroup.get('cardNumber');
  }

  get cvc(){
    return this.manageFormGroup.get('cvc');
  }

  get expiry(){
    return this.manageFormGroup.get('expiry');
  }

  manageFormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl(this.auth.getEmail(), [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', Validators.required),
    nameOnCard : new FormControl('', Validators.required),
    address : new FormControl('', Validators.required),
    cardNumber : new FormControl('', [Validators.required, Validators.pattern(this.creditCardPattern)]),
    cvc : new FormControl('', [Validators.required, Validators.pattern(this.cvcPattern)]),
    expiry : new FormControl('', [Validators.required, Validators.pattern(this.expiryPattern)]),
  });
 
  constructor(private profileService: ProfileService, private toast: ToastrService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {}

  manage(){
    const email = this.email?.value;
    const password = this.password?.value;
    const fullName = this.fullName?.value;
    const nameOnCard = this.nameOnCard?.value;
    const address = this.address?.value;
    const cardNumber = this.cardNumber?.value;
    const cvc = this.cvc?.value;
    const expiry = this.expiry?.value;

    const user = new User(email, password, fullName, nameOnCard, address, cardNumber, cvc, expiry);

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
