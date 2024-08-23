import { Selector } from '@ngxs/store';

import { CountState } from './count.state';
import { CountStateModel } from './count.state.model';

export abstract class CountStateSelectors {
  @Selector([CountState])
  static count({ count }: CountStateModel) {
    return count;
  }
}
