import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';



const routes: Routes = [
    { path: 'ManageProfile', component: ManageProfileComponent },
    { path: 'ChangePassword', component: ChangePasswordComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }