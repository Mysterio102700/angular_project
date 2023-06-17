import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productdetails2Component } from './productdetails2.component';

describe('Productdetails2Component', () => {
  let component: Productdetails2Component;
  let fixture: ComponentFixture<Productdetails2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Productdetails2Component]
    });
    fixture = TestBed.createComponent(Productdetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
