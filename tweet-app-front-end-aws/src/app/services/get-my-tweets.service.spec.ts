import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GetMyTweetsService } from './get-my-tweets.service';

describe('GetMyTweetsService', () => {
  let service: GetMyTweetsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpTestingController],
      providers: [GetMyTweetsService]
    });
    service = TestBed.inject(GetMyTweetsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

});
