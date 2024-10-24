import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CounterFeatureModule } from '../count.feature.module';
import { increaseCounterEndPoint } from '../data-source/default.count.data.source';
import { NumberEntity } from '../entities/number.entity';
import { IncreaseCounterUseCase } from '../use-cases/increase.counter.use.case';

describe('Increase Counter Feature', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let increase: IncreaseCounterUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
      imports: [CounterFeatureModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    increase = TestBed.inject(IncreaseCounterUseCase);
  });

  it('should return a number entity with value of 5', () => {
    increase.execute().then((res) => {
      expect(res instanceof NumberEntity).toBeTrue();
      expect((res as NumberEntity).value).toBe(5);
    });
    const req = httpTestingController.expectOne(increaseCounterEndPoint);
    expect(req.request.url).toContain(increaseCounterEndPoint);
    expect(req.request.method).toBe('PATCH');
    req.flush('5');
    httpTestingController.verify();
  });

  it('should return an error', () => {
    increase.execute().then((res) => {
      expect(res instanceof Error).toBeTrue();
    });
    const req = httpTestingController.expectOne(increaseCounterEndPoint);
    expect(req.request.url).toContain(increaseCounterEndPoint);
    expect(req.request.method).toBe('PATCH');
    req.flush('Error occurred', { status: 500, statusText: 'internal Error' });
    httpTestingController.verify();
  });
});
