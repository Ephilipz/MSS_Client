import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reservation } from '../../entites/reservation.entity';
import { ReservationService } from '../../reservation.service';

@Component({
  selector: 'app-manage-meeting',
  templateUrl: './manage-meeting.component.html',
  styleUrls: ['./manage-meeting.component.scss']
})
export class ManageMeetingComponent implements OnInit {

  reservation?: Reservation;
  private reservationId?: number;
  participants: Array<string> = [];

  constructor(private reservationService: ReservationService,
    private toast: ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reservationId = this.route.snapshot.params['id'];
    if(this.reservationId){
      this.reservationService.getReservation(this.reservationId).subscribe(
        (reservation) => {
          this.reservation = reservation;
          this.participants = reservation.Participants.split(',');
        },
        (err) => {
          this.toast.error('Unable to load the reservation');
        }
      )
    }
  }

}
