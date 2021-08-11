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
  manageFormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),

    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  }

  );
}
