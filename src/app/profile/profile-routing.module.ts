import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';



const routes: Routes = [
    { path: 'ManageProfile', component: ManageProfileComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }