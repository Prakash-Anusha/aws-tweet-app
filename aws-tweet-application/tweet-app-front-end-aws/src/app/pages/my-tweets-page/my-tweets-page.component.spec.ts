import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppModule } from "src/app/app.module";
import { Tweet } from "src/app/models/Tweet";
import { MyTweetsPageComponent } from "./my-tweets-page.component";

describe('MyTweetsPageComponent', () => {
  
  let component: MyTweetsPageComponent;
  let fixture: ComponentFixture<MyTweetsPageComponent>;
  let el: DebugElement;

  let mockTweetsList: Tweet[] = [
    {
      tweetId: "1234",
      userId: "divyansh_kumar",
      firstName: "Divyansh",
      lastName: "Kumar",
      tweetText: "hello",
      comments: [],
      tweetDate: "21-01-2021",
      tweetTime: "07:30 pm",
    }
  ]

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents().then(() => {

      fixture = TestBed.createComponent(MyTweetsPageComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    })
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it("should display the logged-in user's tweets", () => {
    component.myTweetsList = mockTweetsList;

    fixture.detectChanges();

    const tweetCards = el.queryAll(By.css(".my-tweet"));

    expect(tweetCards).toBeTruthy("my tweets not available");
    expect(tweetCards.length).toBe(1);
  });

});
