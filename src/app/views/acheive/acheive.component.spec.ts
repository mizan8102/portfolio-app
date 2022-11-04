import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheiveComponent } from './acheive.component';

describe('AcheiveComponent', () => {
  let component: AcheiveComponent;
  let fixture: ComponentFixture<AcheiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcheiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcheiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
