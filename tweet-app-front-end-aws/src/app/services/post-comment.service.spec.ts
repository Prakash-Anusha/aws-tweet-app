import { TestBed } from '@angular/core/testing';

import { PostCommentService } from './post-comment.service';

describe('PostCommentService', () => {
  let service: PostCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PostCommentService]
    });
    service = TestBed.inject(PostCommentService);
  });

});
