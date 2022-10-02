import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursFormComponent } from './hours-form.component';

describe('HoursFormComponent', () => {
  let component: HoursFormComponent;
  let fixture: ComponentFixture<HoursFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoursFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoursFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
