
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  isSameDay,
  isSameMonth,
  setHours,
  setMinutes,
  isAfter,
  isBefore,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { DAYS_OF_WEEK } from 'angular-calendar';
import { ReservationService } from '../../reservation.service';
import { Reservation } from '../../entites/reservation.entity';
import { ToastrService } from 'ngx-toastr';
import { OffsetTimeHandler } from 'src/app/shared/dates/offsetTimeHandler';
import { ReservationModalComponent } from '../reservation-modal/reservation-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-calendar-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calendar-view.component.scss'],
  templateUrl: './calendar-view.component.html',

})
export class CalendarViewComponent implements OnInit {

  modalRef!: MdbModalRef<ReservationModalComponent>;

  view: CalendarView = CalendarView.Week;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  actions: CalendarEventAction[] = [];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  excludeDays: number[] = [0, 6];

  weekStartsOn = DAYS_OF_WEEK.SUNDAY;

  constructor(private reservationService: ReservationService,
    private toast: ToastrService,
    private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.getReservations();
  }

  private getReservations(): void {
    this.events = [];
    this.reservationService.getReservations().subscribe(
      (reservationList) => {
        reservationList.forEach(
          (reservation) => {
            this.getCalendarEventFromReservation(reservation);
          }
        );
        this.refresh.next();
      },
      (error) => {
        this.toast.error('Unable to load reservations');
      }
    );
  }

  private getCalendarEventFromReservation(reservation: Reservation) {
    const isReservationFinished = isBefore(OffsetTimeHandler.LocalFromUTC(reservation.EndDateTime), new Date());
    this.events = [
      ...this.events,
      {
        title: 'Room ' + reservation.Room?.Id,
        start: OffsetTimeHandler.LocalFromUTC(reservation.StartDateTime),
        end: OffsetTimeHandler.LocalFromUTC(reservation.EndDateTime),
        color: colors.blue,
        draggable: false
      },
    ];
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  hourSegmentClicked(event: any) {
    const isAfterCurrentDate = isAfter(event.date, new Date());
    if (!isAfterCurrentDate) {
      this.toast.info('Please select a valid time', 'Invalid Time');
      return;
    }
    this.modalRef = this.modalService.open(ReservationModalComponent,
      {
        data: { startDate: event.date },
        modalClass: 'modal-lg'
      });
    this.modalRef.onClose.subscribe(
      () => this.getReservations()
    )
  }

}
