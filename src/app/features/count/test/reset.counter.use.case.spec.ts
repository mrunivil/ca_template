import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CounterFeatureModule } from '../count.feature.module';
import { ResetCounterUseCase } from '../use-cases/reset.counter.use.case';

describe('Reset Counter Feature', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let reset: ResetCounterUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
      imports: [CounterFeatureModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    reset = TestBed.inject(ResetCounterUseCase);
  });

  it('should return a number entity with value of 0', () => {
    // implement test here
  });

  it('should return an error', () => {
    // implement test here
  });
});
