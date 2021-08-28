import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Complaint } from '../../entities/complaint.entity';

@Component({
  selector: 'app-create-complaint',
  templateUrl: './create-complaint.component.html',
  styleUrls: ['./create-complaint.component.scss']
})
export class CreateComplaintComponent implements OnInit {
  complaints?: Array<Complaint>;

  createComplaintFormGroup: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    complaint: new FormControl(''),
  });
  
  constructor() { }

  ngOnInit(): void {
  }

}
