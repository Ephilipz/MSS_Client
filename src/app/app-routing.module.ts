import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'Room', loadChildren: './room/room.module#RoomModule' },
  { path: 'Reservation', loadChildren: './reservation/reservation.module#ReservationModule' },
  { path: 'Complaint', loadChildren: './complaint/complaint.module#ComplaintModule' },
  { path: 'Profile', loadChildren: './profile/profile.module#ProfileModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
