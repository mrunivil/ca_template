import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { CounterFeatureModule } from '../../features/count/count.feature.module';
import { CountState } from './count.state';

@NgModule({
  imports: [CounterFeatureModule, NgxsModule.forFeature([CountState])],
})
export class CountStateModule {}
