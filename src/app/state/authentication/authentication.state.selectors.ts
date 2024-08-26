import { Selector } from '@ngxs/store';

import { AuthenticationState } from './authentication.state';
import { AuthenticationStateModel } from './authentication.state.model';

export abstract class AuthenticationStateSelectors {
  @Selector([AuthenticationState])
  static currentUser({ currentUser }: AuthenticationStateModel) {
    return currentUser;
  }
  @Selector([AuthenticationState])
  static loading({ loading }: AuthenticationStateModel) {
    return loading;
  }
}
