import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './components/rooms/rooms.component';
import { EditOrCreateRoomComponent } from './components/edit-or-create-room/edit-or-create-room.component';
import { RoomRoutingModule } from './room-routing.module';



@NgModule({
  declarations: [
    RoomsComponent,
    EditOrCreateRoomComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule
  ]
})
export class RoomModule { }
