import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { ManageMeetingComponent } from './components/manage-meeting/manage-meeting.component';
import { ReservationModalComponent } from './components/reservation-modal/reservation-modal.component';




const routes: Routes = [
    { path: '', redirectTo: 'CalendarView', pathMatch: 'full' },
    { path: 'CalendarView', component: CalendarViewComponent },
    { path: 'ManageMeetingRoom/:id', component: ManageMeetingComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReservationRoutingModule { }