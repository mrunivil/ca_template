import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

// Other imports
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AuthenticationFeatureModule } from '../authentication.feature.module';
import { AbstractAuthenticationDataSource } from '../data-source/abstract.authentication.data.source';
import { signOutEndPoint } from '../data-source/default.authentication.data.source';
import { SignOutUseCase } from '../use-cases/sign.out.use.case';

describe('Sign Out Feature', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let signOutUseCase: SignOutUseCase;
  let ds: AbstractAuthenticationDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
      imports: [AuthenticationFeatureModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    signOutUseCase = TestBed.inject(SignOutUseCase);
    ds = TestBed.inject(AbstractAuthenticationDataSource);
  });

  it('should return a user entity with name John', () => {
    signOutUseCase.execute().then((res) => {
      expect(res instanceof Error).toBeFalse();
    });
    const req = httpTestingController.expectOne(signOutEndPoint);
    expect(req.request.url).toContain(signOutEndPoint);
    expect(req.request.method).toBe('POST');
    req.flush({});
    httpTestingController.verify();
  });

  it('should return an error', () => {
    signOutUseCase.execute().then((res) => {
      expect(res instanceof Error).toBeTrue();
    });
    const req = httpTestingController.expectOne(signOutEndPoint);
    expect(req.request.url).toContain(signOutEndPoint);
    req.flush('Error occurred', { status: 500, statusText: 'internal Error' });
    httpTestingController.verify();
  });
});
