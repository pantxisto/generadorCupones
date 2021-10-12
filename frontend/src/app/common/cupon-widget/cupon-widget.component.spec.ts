import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponWidgetComponent } from './cupon-widget.component';

describe('CuponWidgetComponent', () => {
  let component: CuponWidgetComponent;
  let fixture: ComponentFixture<CuponWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuponWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuponWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
