import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { addHours } from 'date-fns';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ToastrService } from 'ngx-toastr';
import { Billing } from 'src/app/profile/entities/billing.entity';
import { Client } from 'src/app/profile/entities/client.entity';
import { User } from 'src/app/profile/entities/user.entity';
import { ProfileService } from 'src/app/profile/profile.service';
import { Room } from 'src/app/room/entities/room.entity';
import { RoomService } from 'src/app/room/room.service';
import { FormConstants } from 'src/app/shared/constants/formContstants';
import { OffsetTimeHandler } from 'src/app/shared/dates/offsetTimeHandler';
import { Reservation } from '../../entites/reservation.entity';
import { ReservationService } from '../../reservation.service';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrls: ['./reservation-modal.component.scss']
})
export class ReservationModalComponent implements OnInit {

  startDate!: Date;
  endDate!: Date;

  rooms: Array<Room> = [];
  selectedRoom?: Room;

  creditCardFormgroup: FormGroup = new FormGroup({
    nameOnCard: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    cardNumber: new FormControl('', [Validators.required, Validators.pattern(FormConstants.creditCardPattern)]),
    expiry: new FormControl('', [Validators.required, Validators.pattern(FormConstants.expiryPattern)]),
    cvc: new FormControl('', [Validators.required, Validators.pattern(FormConstants.cvcPattern)])
  });

  payPalFormgroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private reservationService: ReservationService,
    private roomService: RoomService,
    private profileService: ProfileService,
    private toast: ToastrService,
    public modalRef: MdbModalRef<ReservationModalComponent>) { }

  ngOnInit(): void {
    this.endDate = addHours(this.startDate, 1);

    this.roomService.getRooms().subscribe(
      (roomList) => {
        this.rooms = roomList;
        this.selectedRoom = roomList[0];
      },
      (error) => {
        this.toast.error('Unable to load rooms')
      }
    );

    this.profileService.getCurrentUserWithBilling().subscribe(
      (user: Client) => {
        if (user.BillingInformation) {
          this.setCreditCardFormGroup(user.BillingInformation)
        }
      },
      err => this.toast.error('Unable to load user')
    )
  }

  private setCreditCardFormGroup(billing: Billing) {
    this.creditCardFormgroup.controls['nameOnCard'].setValue(billing.FullName);
    this.creditCardFormgroup.controls['address'].setValue(billing.Address);
    this.creditCardFormgroup.controls['cardNumber'].setValue(billing.CardNumber);
    this.creditCardFormgroup.controls['expiry'].setValue(billing.Expiry);
  }

  getCreditFC(control: string) {
    return this.creditCardFormgroup.get(control)?.value;
  }

  getPayPalFC(control: string) {
    return this.payPalFormgroup.get(control)?.value;
  }

  payPalGroupHasValue() {
    return this.checkFormGroupHasValues(this.payPalFormgroup);
  }

  creditGroupHasValue() {
    return this.checkFormGroupHasValues(this.creditCardFormgroup);
  }

  private checkFormGroupHasValues(formGroup: FormGroup) {
    for (let control of Object.keys(formGroup.controls)) {
      const formControl = formGroup.controls[control];
      if (formControl.value && formControl.value.trim().length > 0) {
        return true;
      }
    }

    return false;
  }

  formsInvalid() {
    if (this.selectedRoom?.IsSpecial == false)
      return false;
    return (this.creditCardFormgroup.invalid && this.payPalFormgroup.invalid) || !this.selectedRoom;
  }

  reserve() {
    if (!this.selectedRoom)
      return;
    const reservation: Reservation = new Reservation(0, new User('', ''), this.selectedRoom, OffsetTimeHandler.UTCFromLocal(this.startDate), OffsetTimeHandler.UTCFromLocal(this.endDate), []);
    this.reservationService.createReservation(reservation).subscribe(
      (reservation) => {
        this.toast.success('reservation created succesfully');
        this.modalRef.close();
      },
      (error) => {
        const specificError = error.error.ModelError ?? 'Unable to make a reservation at this time';
        this.toast.error(specificError);
      }
    )
  }



}
