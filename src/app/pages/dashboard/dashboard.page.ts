import { lastValueFrom } from 'rxjs';

import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { Authentication } from '../../state/authentication/authentication.state.actions';
import { Count } from '../../state/count/count.state.actions';
import { CountStateModule } from '../../state/count/count.state.module';
import { CountStateSelectors } from '../../state/count/count.state.selectors';
import { CounterComponent } from './components/counter/counter.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  imports: [CommonModule, CountStateModule, HeaderComponent, CounterComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit {
  private readonly store = inject(Store);
  private readonly router = inject(Router);

  readonly counter$ = inject(Store).select(CountStateSelectors.count);

  ngOnInit(): void {
    this.store.dispatch(Count.GetCountAction);
  }

  increaseCount() {
    this.store.dispatch(Count.IncreaseCountAction);
  }
  decreaseCount() {
    this.store.dispatch(Count.DecreaseCountAction);
  }

  async signOut() {
    await lastValueFrom(this.store.dispatch(Authentication.SignOutAction));
    this.router.navigate(['/'], { replaceUrl: true });
  }
}
