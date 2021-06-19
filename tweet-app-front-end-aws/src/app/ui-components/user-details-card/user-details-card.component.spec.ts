import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AppModule } from "src/app/app.module";
import { UserDetailsCardComponent } from "./user-details-card.component";

describe('UserDetailsCardComponent', () => {
  
  let component: UserDetailsCardComponent;
  let fixture: ComponentFixture<UserDetailsCardComponent>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents().then(() => {

        fixture = TestBed.createComponent(UserDetailsCardComponent);
        component = fixture.componentInstance;

    });
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


});
