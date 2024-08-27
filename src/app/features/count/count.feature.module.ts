import { NgModule } from '@angular/core';

import { AbstractCountDataSource } from './data-source/abstract.count.data.source';
import { DefaultCountDataSource } from './data-source/default.count.data.source';
import { AbstractCountRepository } from './repository/abstract.count.repository';
import { DefaultCountRepository } from './repository/default.count.repository';
import { DecreaseCounterUseCase } from './use-cases/decrease.counter.use.case';
import { GetCounterUseCase } from './use-cases/get.counter.use.case';
import { IncreaseCounterUseCase } from './use-cases/increase.counter.use.case';

export type IncreaseCountRequestObject = {};
export type DecreaseCountRequestObject = {};

@NgModule({
  providers: [
    GetCounterUseCase,
    DecreaseCounterUseCase,
    IncreaseCounterUseCase,
    {
      provide: AbstractCountRepository,
      useClass: DefaultCountRepository,
    },
    {
      provide: AbstractCountDataSource,
      useClass: DefaultCountDataSource,
    },
  ],
})
export class CountFeatureModule {}
