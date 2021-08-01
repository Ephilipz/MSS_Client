import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';



@NgModule({
  declarations: [
    ChangePasswordComponent,
    ManageProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
