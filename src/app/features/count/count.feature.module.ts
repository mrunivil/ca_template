import { NgModule } from '@angular/core';

import { AbstractCounterDataSource } from './data-source/abstract.count.data.source';
import { DefaultCounterDataSource } from './data-source/default.count.data.source';
import { AbstractCounterRepository } from './repository/abstract.counter.repository';
import { DefaultCounterRepository } from './repository/default.counter.repository';
import { DecreaseCounterUseCase } from './use-cases/decrease.counter.use.case';
import { GetCounterUseCase } from './use-cases/get.counter.use.case';
import { IncreaseCounterUseCase } from './use-cases/increase.counter.use.case';
import { ResetCounterUseCase } from './use-cases/reset.counter.use.case';

export type IncreaseCountRequestObject = {};
export type DecreaseCountRequestObject = {};

@NgModule({
  providers: [
    GetCounterUseCase,
    DecreaseCounterUseCase,
    IncreaseCounterUseCase,
    ResetCounterUseCase,
    {
      provide: AbstractCounterRepository,
      useClass: DefaultCounterRepository,
    },
    {
      provide: AbstractCounterDataSource,
      useClass: DefaultCounterDataSource,
    },
  ],
})
export class CounterFeatureModule {}
