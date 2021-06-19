import { TestBed } from '@angular/core/testing';

import { EditTweetService } from './edit-tweet.service';

describe('EditTweetService', () => {
  let service: EditTweetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditTweetService]
    });
    service = TestBed.inject(EditTweetService);
  });

  
});
