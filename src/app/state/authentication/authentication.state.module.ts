import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { AuthenticationFeatureModule } from '../../features/authentication/authentication.feature.module';
import { AuthenticationState } from './authentication.state';

@NgModule({
  imports: [
    AuthenticationFeatureModule,
    NgxsModule.forFeature([AuthenticationState]),
  ],
})
export class AuthenticationStateModule {}
