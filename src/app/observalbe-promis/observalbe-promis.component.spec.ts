import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservalbePromisComponent } from './observalbe-promis.component';

describe('ObservalbePromisComponent', () => {
  let component: ObservalbePromisComponent;
  let fixture: ComponentFixture<ObservalbePromisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservalbePromisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservalbePromisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
