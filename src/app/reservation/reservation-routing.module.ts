import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';




const routes: Routes = [
    { path: 'CalendarView', component: CalendarViewComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReservationRoutingModule { }