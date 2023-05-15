import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpingSectionComponent } from './helping-section.component';

describe('HelpingSectionComponent', () => {
  let component: HelpingSectionComponent;
  let fixture: ComponentFixture<HelpingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpingSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
