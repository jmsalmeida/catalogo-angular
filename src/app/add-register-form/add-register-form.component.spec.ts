import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegisterFormComponent } from './add-register-form.component';

describe('AddRegisterFormComponent', () => {
  let component: AddRegisterFormComponent;
  let fixture: ComponentFixture<AddRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
