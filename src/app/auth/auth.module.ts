import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MdbFormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
