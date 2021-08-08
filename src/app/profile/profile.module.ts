import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [
    ChangePasswordComponent,
    ManageProfileComponent
  ],
  imports: [
    CommonModule,
    MdbFormsModule,
    ReactiveFormsModule,
    MdbValidationModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
