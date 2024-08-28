import { inject, Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';

import { DecreaseCounterUseCase } from '../../features/count/use-cases/decrease.counter.use.case';
import { GetCounterUseCase } from '../../features/count/use-cases/get.counter.use.case';
import { IncreaseCounterUseCase } from '../../features/count/use-cases/increase.counter.use.case';
import { Counter } from './count.state.actions';
import { CountStateModel } from './count.state.model';

@State<CountStateModel>({
  name: 'count',
  defaults: {
    count: { value: 0 },
  },
})
@Injectable()
export class CounterState {
  private readonly getCountUseCase = inject(GetCounterUseCase);
  private readonly increaseCountUseCaseoid = inject(IncreaseCounterUseCase);
  private readonly decreaseCountUseCaseoid = inject(DecreaseCounterUseCase);

  @Action(Counter.GetCounterAction)
  async getCount({ patchState }: StateContext<CountStateModel>) {
    const ret = await this.getCountUseCase.execute();

    if (ret instanceof Error) {
      alert('Something went wrong 😮');
    } else {
      patchState({
        count: ret,
      });
    }
  }

  @Action(Counter.IncreaseCounterAction)
  async increaseCount({ patchState }: StateContext<CountStateModel>) {
    const ret = await this.increaseCountUseCaseoid.execute();

    if (ret instanceof Error) {
      alert('Something went wrong 😮');
    } else {
      patchState({
        count: ret,
      });
    }
  }

  @Action(Counter.DecreaseCounterAction)
  async decreaseCount({ patchState }: StateContext<CountStateModel>) {
    const ret = await this.decreaseCountUseCaseoid.execute();

    if (ret instanceof Error) {
      alert('Something went wrong 😮');
    } else {
      patchState({
        count: ret,
      });
    }
  }
}
