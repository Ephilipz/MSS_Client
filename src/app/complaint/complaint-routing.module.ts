import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComplaintComponent } from './components/manage-complaint/manage-complaint.component';
import { UserComplaintsComponent } from './components/user-complaints/user-complaints.component';




const routes: Routes = [
    { path: 'ManageComplaints', component: ManageComplaintComponent  },
    { path: 'UserComplaints', component: UserComplaintsComponent  }
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComplaintRoutingModule { }