import { inject, Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

import { SignInUseCase } from '../../features/authentication/use-cases/sign.in.use.case';
import { SignOutUseCase } from '../../features/authentication/use-cases/sign.out.use.case';
import { Authentication } from './authentication.state.actions';
import { AuthenticationStateModel } from './authentication.state.model';

@State<AuthenticationStateModel>({
  name: 'auth',
  defaults: {
    currentUser: undefined,
    loading: false,
  },
})
@Injectable()
export class AuthenticationState {
  private readonly signInUseCase = inject(SignInUseCase);
  private readonly signOutUseCase = inject(SignOutUseCase);

  @Action(Authentication.SignInAction)
  async signIn({ patchState }: StateContext<AuthenticationStateModel>) {
    patchState({
      loading: true,
    });
    const ret = await this.signInUseCase.execute();
    if (ret instanceof Error) {
      patchState({
        currentUser: undefined,
        loading: false,
      });
    } else {
      patchState({
        currentUser: ret,
        loading: false,
      });
    }
  }

  @Action(Authentication.SignOutAction)
  async signOut({ patchState }: StateContext<AuthenticationStateModel>) {
    patchState({
      loading: true,
    });
    await this.signOutUseCase.execute();
    patchState({
      currentUser: undefined,
      loading: false,
    });
  }
}
