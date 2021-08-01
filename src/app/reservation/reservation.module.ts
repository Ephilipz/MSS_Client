import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderViewComponent } from './components/calender-view/calender-view.component';
import { ReservationModalComponent } from './components/reservation-modal/reservation-modal.component';
import { ManageMeetingComponent } from './components/manage-meeting/manage-meeting.component';
import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';



@NgModule({
  declarations: [
    CalenderViewComponent,
    ReservationModalComponent,
    ManageMeetingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReservationModule { }
