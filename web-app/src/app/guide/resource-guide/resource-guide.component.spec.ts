import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceGuideComponent } from './resource-guide.component';

describe('ResourceGuideComponent', () => {
  let component: ResourceGuideComponent;
  let fixture: ComponentFixture<ResourceGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
