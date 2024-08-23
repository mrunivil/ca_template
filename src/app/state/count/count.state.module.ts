import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { CountFeatureModule } from '../../features/count/count.feature.module';
import { CountState } from './count.state';

@NgModule({
  imports: [CountFeatureModule, NgxsModule.forFeature([CountState])],
})
export class CountStateModule {}
