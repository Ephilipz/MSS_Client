import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ToastrService } from 'ngx-toastr';
import { Room } from '../../entities/room.entity';
import { RoomService } from '../../room.service';
import { EditOrCreateRoomComponent } from '../edit-or-create-room/edit-or-create-room.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  rooms?: Array<Room>;
  modalRef!: MdbModalRef<EditOrCreateRoomComponent>;

  constructor(private roomService: RoomService,
    private toast: ToastrService, private mdbModalService: MdbModalService) { }

  ngOnInit(): void {
    this.loadRooms();
  }

  private loadRooms() {
    this.roomService.getRooms().subscribe(
      (rooms) => {
        this.rooms = rooms;
      },
      (error) => {
        this.toast.error('Unable to load rooms');
      }
    )
  }

  deleteRoom(room: Room) {
    this.roomService.deleteRoom(room.Id).subscribe(
      (success) => {
        this.toast.info('Room Deleted');
        this.loadRooms();
      },
      (error) => {
        const detailedError = error?.error?.ModelError ?? 'Unable to delete';
        this.toast.error(detailedError);
      }
    )
  }

  addRoom() {
    this.modalRef = this.mdbModalService.open(
      EditOrCreateRoomComponent
    );
    this.modalRef.onClose.subscribe(
      (closed) => this.loadRooms()
    )
  }

}
