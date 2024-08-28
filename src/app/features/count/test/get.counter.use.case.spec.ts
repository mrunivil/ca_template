import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { NumberEntity } from '../../../core/entities/number.entity';
import { CounterFeatureModule } from '../count.feature.module';
import { getCounterEndPoint } from '../data-source/default.count.data.source';
import { GetCounterUseCase } from '../use-cases/get.counter.use.case';

describe('Get Counter Feature', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let get: GetCounterUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
      imports: [CounterFeatureModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    get = TestBed.inject(GetCounterUseCase);
  });

  it('should return a number entity with value of 5', () => {
    get.execute().then((res) => {
      expect(res instanceof NumberEntity).toBeTrue();
      expect((res as NumberEntity).value).toBe(5);
    });
    const req = httpTestingController.expectOne(getCounterEndPoint);
    expect(req.request.url).toContain(getCounterEndPoint);
    expect(req.request.method).toBe('GET');
    req.flush('5');
    httpTestingController.verify();
  });

  it('should return an error', () => {
    get.execute().then((res) => {
      expect(res instanceof Error).toBeTrue();
    });
    const req = httpTestingController.expectOne(getCounterEndPoint);
    expect(req.request.url).toContain(getCounterEndPoint);
    expect(req.request.method).toBe('GET');
    req.flush('Error occurred', { status: 500, statusText: 'internal Error' });
    httpTestingController.verify();
  });
});
