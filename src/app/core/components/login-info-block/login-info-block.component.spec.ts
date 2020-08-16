import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInfoBlockComponent } from './login-info-block.component';

describe('LoginInfoBlockComponent', () => {
  let component: LoginInfoBlockComponent;
  let fixture: ComponentFixture<LoginInfoBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInfoBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
