import {
  Component,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import {
  isAfter,
  isBefore,
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarView,
} from 'angular-calendar';
import { DAYS_OF_WEEK } from 'angular-calendar';
import { ReservationService } from '../../reservation.service';
import { Reservation } from '../../entites/reservation.entity';
import { ToastrService } from 'ngx-toastr';
import { OffsetTimeHandler } from 'src/app/shared/dates/offsetTimeHandler';
import { ReservationModalComponent } from '../reservation-modal/reservation-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/profile.service';

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

  isAdmin: boolean = false;

  constructor(private reservationService: ReservationService,
    private toast: ToastrService,
    private modalService: MdbModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private profileService: ProfileService) { }

  ngOnInit(): void {
    this.loadPageData();
  }

  private async loadPageData() {
    this.isAdmin = (<any>(await this.profileService.checkIsAdmin().toPromise()))['isAdmin'];
    this.getReservations();
  }

  private getReservations(): void {
    this.events = [];
    const functionName = this.isAdmin ? 'getAllReservations' : 'getReservations';
    this.reservationService[functionName]().subscribe(
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
        id: reservation.Id,
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

  eventClicked(e: any) {
    const event: CalendarEvent = e.event;
    const isReservationFinished = isBefore(OffsetTimeHandler.LocalFromUTC(event.end!), new Date());
    if (isReservationFinished) {
      this.toast.info('this reservation has already finished');
      return;
    }
    this.router.navigate(['../ManageMeetingRoom', event.id], { relativeTo: this.activatedRoute });
  }

}
