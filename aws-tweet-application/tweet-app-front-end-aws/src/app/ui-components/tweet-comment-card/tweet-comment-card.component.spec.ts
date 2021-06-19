import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { TweetCommentCardComponent } from './tweet-comment-card.component';


describe('TweetCommentCardComponent', () => {
  let component: TweetCommentCardComponent;
  let fixture: ComponentFixture<TweetCommentCardComponent>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(TweetCommentCardComponent);
      component = fixture.componentInstance;
    })
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
