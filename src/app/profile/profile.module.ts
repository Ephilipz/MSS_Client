import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { ProfileRoutingModule } from './profile-routing.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { ProfileListComponent } from './components/profile-list/profile-list.component';

@NgModule({
  declarations: [
    ChangePasswordComponent,
    ManageProfileComponent,
    ProfileListComponent
  ],
  imports: [
    CommonModule,
    MdbFormsModule,
    ReactiveFormsModule,
    MdbValidationModule,
    ProfileRoutingModule,
    AuthRoutingModule,
  ]
})
export class ProfileModule { }
