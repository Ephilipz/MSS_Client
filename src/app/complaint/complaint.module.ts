import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompalaintHistoryComponent } from './components/compalaint-history/compalaint-history.component';
import { CreateComplaintComponent } from './components/create-complaint/create-complaint.component';
import { UserComplaintsComponent } from './components/user-complaints/user-complaints.component';
import { ManageComplaintComponent } from './components/manage-complaint/manage-complaint.component';



@NgModule({
  declarations: [
    CompalaintHistoryComponent,
    CreateComplaintComponent,
    UserComplaintsComponent,
    ManageComplaintComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComplaintModule { }
