import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompalaintHistoryComponent } from './compalaint-history.component';

describe('CompalaintHistoryComponent', () => {
  let component: CompalaintHistoryComponent;
  let fixture: ComponentFixture<CompalaintHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompalaintHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompalaintHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
