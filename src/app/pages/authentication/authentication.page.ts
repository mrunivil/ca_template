import { lastValueFrom } from 'rxjs';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { Authentication } from '../../state/authentication/authentication.state.actions';
import { AuthenticationStateModule } from '../../state/authentication/authentication.state.module';
import { AuthenticationStateSelectors } from '../../state/authentication/authentication.state.selectors';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [AuthenticationStateModule, CommonModule],
  templateUrl: './authentication.page.html',
  styleUrl: './authentication.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationPage {
  private readonly router = inject(Router);

  protected readonly loading$ = inject(Store).select(
    AuthenticationStateSelectors.loading
  );

  private readonly store = inject(Store);
  async signIn() {
    await lastValueFrom(this.store.dispatch(Authentication.SignInAction));
    if (!!this.store.selectSnapshot(AuthenticationStateSelectors.currentUser)) {
      this.router.navigate(['/dashboard'], { replaceUrl: true });
    }
  }
}
