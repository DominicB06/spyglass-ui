import { TestBed } from '@angular/core/testing';

import { GoalApiService } from './goal-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('GoalApiService', () => {
  let service: GoalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(GoalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
