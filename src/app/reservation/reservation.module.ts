import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ReservationRoutingModule } from './reservation-routing.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { ReservationModalComponent } from './components/reservation-modal/reservation-modal.component';
import { ManageMeetingComponent } from './components/manage-meeting/manage-meeting.component';

@NgModule({
  declarations: [
    CalendarViewComponent,
    ReservationModalComponent,
    ManageMeetingComponent
  ],
  exports: [CalendarViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReservationRoutingModule,
    MdbFormsModule,
    MdbValidationModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
  }),
],
})
export class ReservationModule { }
