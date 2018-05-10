import { TestBed, inject } from '@angular/core/testing';

import { LikeCounterService } from './like-counter.service';

describe('LikeCounterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LikeCounterService]
    });
  });

  it('should be created', inject([LikeCounterService], (service: LikeCounterService) => {
    expect(service).toBeTruthy();
  }));
});
