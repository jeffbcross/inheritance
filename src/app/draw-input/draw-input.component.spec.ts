import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawInputComponent } from './draw-input.component';

describe('DrawInputComponent', () => {
  let component: DrawInputComponent;
  let fixture: ComponentFixture<DrawInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
