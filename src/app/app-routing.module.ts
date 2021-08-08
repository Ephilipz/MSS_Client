import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'Room', loadChildren: () => import('./room/room.module').then(m => m.RoomModule) },
  { path: 'Reservation', loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule) },
  { path: 'Complaint', loadChildren: () => import('./complaint/complaint.module').then(m => m.ComplaintModule) },
  { path: 'Profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
