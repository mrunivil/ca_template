import { Selector } from '@ngxs/store';

import { CounterState } from './count.state';
import { CountStateModel } from './count.state.model';

export abstract class CounterStateSelectors {
  @Selector([CounterState])
  static count({ count }: CountStateModel) {
    return count;
  }
}
