import { NgModule } from '@angular/core';

import { AbstractAuthenticationDataSource } from './data-source/abstract.authentication.data.source';
import { DefaultAuthenticationDataSource } from './data-source/default.authentication.data.source';
import { AbstractAuthenticationRepository } from './repository/abstract.authentication.repository';
import { DefaultAuthenticationRepository } from './repository/default.authentication.repository';
import { SignInUseCase } from './use-cases/sign.in.use.case';
import { SignOutUseCase } from './use-cases/sign.out.use.case';

export type SignInRequestObject = {};

@NgModule({
  providers: [
    SignInUseCase,
    SignOutUseCase,
    {
      provide: AbstractAuthenticationRepository,
      useClass: DefaultAuthenticationRepository,
    },
    {
      provide: AbstractAuthenticationDataSource,
      useClass: DefaultAuthenticationDataSource,
    },
  ],
})
export class AuthenticationFeatureModule {}
