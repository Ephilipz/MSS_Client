import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ToastrService } from 'ngx-toastr';
import { Room } from '../../entities/room.entity';
import { RoomService } from '../../room.service';

@Component({
  selector: 'app-edit-or-create-room',
  templateUrl: './edit-or-create-room.component.html',
  styleUrls: ['./edit-or-create-room.component.scss']
})
export class EditOrCreateRoomComponent implements OnInit {

  isSpecial = false;

  constructor(public modalRef: MdbModalRef<EditOrCreateRoomComponent>,
    private roomService: RoomService,
    private toast: ToastrService) { }

  ngOnInit(): void {
  }

  checkChange(event: any){
    this.isSpecial = event.target.checked;
  }

  createRoom() {
    const room = new Room(0, this.isSpecial);
    this.roomService.createRoom(room).subscribe(
      (room) => {
        this.toast.success(`Room ${room.Id} Added`);
        this.modalRef.close();
      },
      (error) => {
        this.toast.error('Unable to add the room');
      }
    )
  }

}
