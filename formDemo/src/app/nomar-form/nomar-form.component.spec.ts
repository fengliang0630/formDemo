import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomarFormComponent } from './nomar-form.component';

describe('NomarFormComponent', () => {
  let component: NomarFormComponent;
  let fixture: ComponentFixture<NomarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
