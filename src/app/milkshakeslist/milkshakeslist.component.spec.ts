import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkshakeslistComponent } from './milkshakeslist.component';

describe('MilkshakeslistComponent', () => {
  let component: MilkshakeslistComponent;
  let fixture: ComponentFixture<MilkshakeslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilkshakeslistComponent]
    });
    fixture = TestBed.createComponent(MilkshakeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
