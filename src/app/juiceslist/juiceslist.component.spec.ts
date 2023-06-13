import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuiceslistComponent } from './juiceslist.component';

describe('JuiceslistComponent', () => {
  let component: JuiceslistComponent;
  let fixture: ComponentFixture<JuiceslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuiceslistComponent]
    });
    fixture = TestBed.createComponent(JuiceslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
