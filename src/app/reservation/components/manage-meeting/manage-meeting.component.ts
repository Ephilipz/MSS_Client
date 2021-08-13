import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reservation } from '../../entites/reservation.entity';
import { ReservationService } from '../../reservation.service';

@Component({
  selector: 'app-manage-meeting',
  templateUrl: './manage-meeting.component.html',
  styleUrls: ['./manage-meeting.component.scss']
})
export class ManageMeetingComponent implements OnInit {

  reservation!: Reservation;
  private reservationId?: number;
  participants: Array<string> = [];
  partipantEmail: string = '';

  constructor(private reservationService: ReservationService,
    private toast: ToastrService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.reservationId = +this.route.snapshot.params['id'];
    if (this.reservationId) {
      this.reservationService.getReservation(this.reservationId).subscribe(
        (reservation) => {
          this.reservation = reservation;
          this.participants.unshift(...reservation.Participants.split(','));
        },
        (err) => {
          this.toast.error('Unable to load the reservation');
        }
      )
    }
    else {
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }

  addParticipant() {
    if (this.participants.includes(this.partipantEmail)) {
      this.toast.info('parctipant already exists');
      return;
    }
    this.participants.push(this.partipantEmail);
    this.partipantEmail = '';
    this.updateReservation();
  }

  removeParticipant(participant: string) {
    const index = this.participants.indexOf(participant);
    if (index > -1) {
      this.participants.splice(index, 1);
      this.updateReservation();
    }
  }

  updateReservation() {
    this.reservation.Participants = this.participants?.join(',');
    this.reservationService.updateReservation(this.reservation).subscribe(
      (success) => {
        this.toast.info('Reservtion has been udpated');
      },
      (error) => {
        this.toast.error('Error updating the reservation');
      }
    )
  }

}
