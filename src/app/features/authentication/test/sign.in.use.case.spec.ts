import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

// Other imports
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AuthenticationFeatureModule } from '../authentication.feature.module';
import { AbstractAuthenticationDataSource } from '../data-source/abstract.authentication.data.source';
import { signInEndPoint } from '../data-source/default.authentication.data.source';
import { SignInUseCase } from '../use-cases/sign.in.use.case';

describe('Sign In Feature', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let signInUseCase: SignInUseCase;
  let ds: AbstractAuthenticationDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
      imports: [AuthenticationFeatureModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    signInUseCase = TestBed.inject(SignInUseCase);
    ds = TestBed.inject(AbstractAuthenticationDataSource);
  });

  it('should return a user entity with name John', () => {
    signInUseCase.execute().then((res) => {
      expect(res.name).toBe('John');
    });
    const req = httpTestingController.expectOne(signInEndPoint);
    expect(req.request.url).toContain(signInEndPoint);
    expect(req.request.method).toBe('POST');
    req.flush({ name: 'John' });
    httpTestingController.verify();
  });

  it('should return an error', () => {
    signInUseCase.execute().then((res) => {
      expect(res instanceof Error).toBeTrue();
    });
    const req = httpTestingController.expectOne(signInEndPoint);
    expect(req.request.url).toContain(signInEndPoint);
    expect(req.request.method).toBe('POST');
    req.flush('Error occurred', { status: 500, statusText: 'internal Error' });
    httpTestingController.verify();
  });
});
