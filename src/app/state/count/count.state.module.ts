import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { CounterFeatureModule } from '../../features/count/count.feature.module';
import { CounterState } from './count.state';

@NgModule({
  imports: [CounterFeatureModule, NgxsModule.forFeature([CounterState])],
})
export class CounterStateModule {}
