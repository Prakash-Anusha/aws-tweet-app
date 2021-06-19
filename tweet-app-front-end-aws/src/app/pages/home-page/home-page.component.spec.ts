import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppModule } from "src/app/app.module";
import { Tweet } from "src/app/models/Tweet";
import { HomePageComponent } from "./home-page.component";

describe('HomePageComponent', () => {

    let component: HomePageComponent;
    let fixture: ComponentFixture<HomePageComponent>;
    let el: DebugElement

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
            fixture = TestBed.createComponent(HomePageComponent);
            component = fixture.componentInstance;
            el = fixture.debugElement;
        })
    }));


    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should display post tweet card', () => {
        const postTweetCard = el.queryAll(By.css(".post-tweet-card"));
        expect(postTweetCard).toBeTruthy();
    });

});
