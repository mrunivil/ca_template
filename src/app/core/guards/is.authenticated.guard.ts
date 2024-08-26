import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { AuthenticationStateSelectors } from '../../state/authentication/authentication.state.selectors';

export const isAuthenticated = () => {
  const store = inject(Store);
  const isAuthenticated = store.selectSnapshot(
    AuthenticationStateSelectors.currentUser
  );
  if (!isAuthenticated) return inject(Router).navigateByUrl('');
  return isAuthenticated;
};
