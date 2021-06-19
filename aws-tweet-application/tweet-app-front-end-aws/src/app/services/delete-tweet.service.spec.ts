import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DeleteTweetService } from './delete-tweet.service';

describe('DeleteTweetService', () => {
  let deleteTweetService: DeleteTweetService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DeleteTweetService]
    });
    deleteTweetService = TestBed.inject(DeleteTweetService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should delete post', () => {

    let deleteStatus: boolean;
    
    deleteTweetService.deleteTweet('divyansh_kumar', '123').subscribe(response => {
      deleteStatus = response;
    })

    const req = httpTestingController.expectOne({
      method: 'DELETE',
      url: 'http://localhost:8090/api/v1.0/tweets/divyansh_kumar/delete'
    })
  
    req.flush(true);
    expect(deleteStatus).toEqual(true);
  
  });

  
});
