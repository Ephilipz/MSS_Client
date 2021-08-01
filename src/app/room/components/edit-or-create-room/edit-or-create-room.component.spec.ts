import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrCreateRoomComponent } from './edit-or-create-room.component';

describe('EditOrCreateRoomComponent', () => {
  let component: EditOrCreateRoomComponent;
  let fixture: ComponentFixture<EditOrCreateRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOrCreateRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrCreateRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
