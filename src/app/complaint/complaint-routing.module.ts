import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintHistoryComponent } from './components/complaint-history/complaint-history.component';
import { CreateComplaintComponent } from './components/create-complaint/create-complaint.component';
import { ManageComplaintComponent } from './components/manage-complaint/manage-complaint.component';
import { UserComplaintsComponent } from './components/user-complaints/user-complaints.component';




const routes: Routes = [
    { path: 'CreateComplaint', component: CreateComplaintComponent},
    { path: 'ManageComplaints', component: ManageComplaintComponent  },
    { path: 'UserComplaints', component: UserComplaintsComponent  },
    { path: 'ComplaintHistory', component: ComplaintHistoryComponent  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComplaintRoutingModule { }