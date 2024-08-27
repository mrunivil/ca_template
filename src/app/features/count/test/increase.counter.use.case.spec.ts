import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NumberEntity } from '../../../core/entities/number.entity';
import { CountFeatureModule } from '../count.feature.module';
import { increaseCountEndPoint } from '../data-source/default.count.data.source';
import { IncreaseCounterUseCase } from '../use-cases/increase.counter.use.case';

describe('Increase Counter Feature', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let increase: IncreaseCounterUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
      imports: [CountFeatureModule],
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
    const req = httpTestingController.expectOne(increaseCountEndPoint);
    expect(req.request.url).toContain(increaseCountEndPoint);
    expect(req.request.method).toBe('PATCH');
    req.flush('5');
    httpTestingController.verify();
  });

  it('should return an error', () => {
    increase.execute().then((res) => {
      expect(res instanceof Error).toBeTrue();
    });
    const req = httpTestingController.expectOne(increaseCountEndPoint);
    expect(req.request.url).toContain(increaseCountEndPoint);
    expect(req.request.method).toBe('PATCH');
    req.flush('Error occurred', { status: 500, statusText: 'internal Error' });
    httpTestingController.verify();
  });
});
