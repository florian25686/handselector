import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandselectorComponent } from './handselector.component';

describe('HandselectorComponent', () => {
  let component: HandselectorComponent;
  let fixture: ComponentFixture<HandselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
