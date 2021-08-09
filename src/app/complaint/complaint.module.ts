import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintHistoryComponent } from './components/complaint-history/complaint-history.component';
import { CreateComplaintComponent } from './components/create-complaint/create-complaint.component';
import { UserComplaintsComponent } from './components/user-complaints/user-complaints.component';
import { ManageComplaintComponent } from './components/manage-complaint/manage-complaint.component';
import { ComplaintRoutingModule } from './complaint-routing.module';



@NgModule({
  declarations: [
    ComplaintHistoryComponent,
    CreateComplaintComponent,
    UserComplaintsComponent,
    ManageComplaintComponent
  ],
  imports: [
    CommonModule,
    ComplaintRoutingModule
  ]
})
export class ComplaintModule { }
