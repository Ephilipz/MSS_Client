import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { ReservationModalComponent } from './components/reservation-modal/reservation-modal.component';
import { ManageMeetingComponent } from './components/manage-meeting/manage-meeting.component';
import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ReservationRoutingModule } from './reservation-routing.module';



@NgModule({
  declarations: [
    CalendarViewComponent,

  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    MdbFormsModule,
    ReactiveFormsModule
  ]
})
export class ReservationModule { }
