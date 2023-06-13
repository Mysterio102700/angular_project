import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MocktailslistComponent } from './mocktailslist.component';

describe('MocktailslistComponent', () => {
  let component: MocktailslistComponent;
  let fixture: ComponentFixture<MocktailslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MocktailslistComponent]
    });
    fixture = TestBed.createComponent(MocktailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
