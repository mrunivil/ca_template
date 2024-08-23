import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Store } from '@ngxs/store';

import { Count } from '../../state/count/count.state.actions';
import { CountStateModule } from '../../state/count/count.state.module';
import { CountStateSelectors } from '../../state/count/count.state.selectors';
import { HeaderComponent } from './components/header/header.component';

@Component({
  imports: [CommonModule, CountStateModule, HeaderComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit {
  private readonly store = inject(Store);
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
}
