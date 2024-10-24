import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CounterFeatureModule } from '../count.feature.module';
import { decreaseCounterEndPoint } from '../data-source/default.count.data.source';
import { NumberEntity } from '../entities/number.entity';
import { DecreaseCounterUseCase } from '../use-cases/decrease.counter.use.case';

describe('Decrease Counter Feature', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let decrease: DecreaseCounterUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
      imports: [CounterFeatureModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    decrease = TestBed.inject(DecreaseCounterUseCase);
  });

  it('should return a number entity with value of 5', () => {
    decrease.execute().then((res) => {
      expect(res instanceof NumberEntity).toBeTrue();
      expect((res as NumberEntity).value).toBe(5);
    });
    const req = httpTestingController.expectOne(decreaseCounterEndPoint);
    expect(req.request.url).toContain(decreaseCounterEndPoint);
    expect(req.request.method).toBe('PATCH');
    req.flush('5');
    httpTestingController.verify();
  });

  it('should return an error', () => {
    decrease.execute().then((res) => {
      expect(res instanceof Error).toBeTrue();
    });
    const req = httpTestingController.expectOne(decreaseCounterEndPoint);
    expect(req.request.url).toContain(decreaseCounterEndPoint);
    expect(req.request.method).toBe('PATCH');
    req.flush('Error occurred', { status: 500, statusText: 'internal Error' });
    httpTestingController.verify();
  });
});
