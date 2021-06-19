import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppModule } from "src/app/app.module";
import { UserDetails } from "src/app/models/user-details";
import { AllUsersPageComponent } from "./all-users-page.component";

describe('AllUsersPageComponent', () => {
  
  let component: AllUsersPageComponent;
  let fixture: ComponentFixture<AllUsersPageComponent>;
  let el: DebugElement;

  let mockUsers: UserDetails[] = [
    {
      loginId: 'divyansh_kumar',
      firstName: 'Divyansh',
      lastName: 'Kumar',
      email: 'divyansh@abc.com',
      dateOfBirth: '01-01-1989',
      contactNumber: '12345',
      password: '123'
    }
  ]


  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AllUsersPageComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    })
  } ));
 

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display all users', () => {

    component.allUsersList = mockUsers;

    fixture.detectChanges();

    const userCards = el.queryAll(By.css(".user-card"));

    expect(userCards).toBeTruthy("Could not find cards");

    expect(userCards.length).toBe(1);
  });

});
