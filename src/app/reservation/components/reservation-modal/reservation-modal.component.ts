import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrls: ['./reservation-modal.component.scss']
})
export class ReservationModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rerervationModal: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),

    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


}
