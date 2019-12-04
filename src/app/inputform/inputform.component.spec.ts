import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { inputFormComponent } from './inputform.component';

describe('InputformComponent', () => {
  let component: inputformComponent;
  let fixture: ComponentFixture<inputformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ inputformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(inputformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
