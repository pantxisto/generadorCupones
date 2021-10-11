import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSecuencialComponent } from './no-secuencial.component';

describe('NoSecuencialComponent', () => {
  let component: NoSecuencialComponent;
  let fixture: ComponentFixture<NoSecuencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoSecuencialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSecuencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
