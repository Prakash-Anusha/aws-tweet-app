import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { LoginCardComponent } from './login-card.component';

describe('LoginCardComponent', () => {
  let component: LoginCardComponent;
  let fixture: ComponentFixture<LoginCardComponent>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(LoginCardComponent);
      component = fixture.componentInstance;
    })
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
