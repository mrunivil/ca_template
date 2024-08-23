import { NgModule } from '@angular/core';

import { AbstractCountDataSource } from './data-source/abstract.count.data.source';
import { DefaultCountDataSource } from './data-source/default.count.data.source';
import { AbstractCountRepository } from './repository/abstract.count.repository';
import { DefaultCountRepository } from './repository/default.count.repository';
import { DecreaseCountUseCase } from './use-cases/decrease.use.case';
import { GetCountUseCase } from './use-cases/get.use.case';
import { IncreaseCountUseCase } from './use-cases/increase.use.case';

export type IncreaseCountRequestObject = {};
export type DecreaseCountRequestObject = {};

@NgModule({
  providers: [
    GetCountUseCase,
    DecreaseCountUseCase,
    IncreaseCountUseCase,
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
