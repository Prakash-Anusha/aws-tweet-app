import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { PostTweetCardComponent } from './post-tweet-card.component';



describe('PostTweetCardComponent', () => {
  let component: PostTweetCardComponent;
  let fixture: ComponentFixture<PostTweetCardComponent>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(PostTweetCardComponent);
      component = fixture.componentInstance;
    })
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
