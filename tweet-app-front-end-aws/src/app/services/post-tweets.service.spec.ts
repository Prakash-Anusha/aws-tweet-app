import { TestBed } from '@angular/core/testing';

import { PostTweetsService } from './post-tweets.service';

describe('PostTweetsService', () => {
  let service: PostTweetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PostTweetsService]
    });
    service = TestBed.inject(PostTweetsService);
  });

});
