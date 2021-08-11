import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/network/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'Reservation', pathMatch: 'full' },
  { path: 'Auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'Room', loadChildren: () => import('./room/room.module').then(m => m.RoomModule), canActivate: [AuthGuard] },
  { path: 'Reservation', loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule), canActivate: [AuthGuard] },
  { path: 'Complaint', loadChildren: () => import('./complaint/complaint.module').then(m => m.ComplaintModule), canActivate: [AuthGuard] },
  { path: 'Profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
