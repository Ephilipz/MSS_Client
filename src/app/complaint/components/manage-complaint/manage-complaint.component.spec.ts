import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageComplaintComponent } from './manage-complaint.component';

describe('ManageComplaintComponent', () => {
  let component: ManageComplaintComponent;
  let fixture: ComponentFixture<ManageComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
