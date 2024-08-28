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
import { Counter } from '../../state/count/count.state.actions';
import { CounterStateModule } from '../../state/count/count.state.module';
import { CounterStateSelectors } from '../../state/count/count.state.selectors';
import { CounterComponent } from './components/counter/counter.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  imports: [
    CommonModule,
    CounterStateModule,
    HeaderComponent,
    CounterComponent,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit {
  private readonly store = inject(Store);
  private readonly router = inject(Router);

  readonly counter$ = inject(Store).select(CounterStateSelectors.count);

  ngOnInit(): void {
    this.store.dispatch(Counter.GetCounterAction);
  }

  increaseCounter() {
    this.store.dispatch(Counter.IncreaseCounterAction);
  }
  decreaseCounter() {
    this.store.dispatch(Counter.DecreaseCounterAction);
  }
  resetCounter() {
    this.store.dispatch(Counter.ResetCounterAction);
  }

  signOut() {
    this.store.dispatch(Authentication.SignOutAction);
    this.router.navigate(['/'], { replaceUrl: true });
  }
}
