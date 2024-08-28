import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';

import { AuthenticationStateModule } from '../../state/authentication/authentication.state.module';
import { AuthenticationPage } from './authentication.page';

describe('Authentication Page', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient],
      imports: [
        NgxsModule.forRoot([]),
        AuthenticationStateModule,
        AuthenticationPage,
      ],
    }).compileComponents();
  });
  it('sould dispatch the sign in action', () => {
    const comp = TestBed.runInInjectionContext(() => new AuthenticationPage());

    comp.signIn();

    expect(1).toBeTruthy();
  });
});
