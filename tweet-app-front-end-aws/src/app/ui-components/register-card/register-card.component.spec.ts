import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { RegisterCardComponent } from './register-card.component';




describe('RegisterCardComponent', () => {
  let component: RegisterCardComponent;
  let fixture: ComponentFixture<RegisterCardComponent>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(RegisterCardComponent);
      component = fixture.componentInstance;
    })
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
