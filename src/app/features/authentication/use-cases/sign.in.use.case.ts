import { inject, Injectable } from '@angular/core';

import { UserEntity } from '../../../core/entities/user.entity';
import { UseCase } from '../../../core/use.case.interface';
import { SignInRequestObject } from '../authentication.feature.module';
import { AbstractAuthenticationRepository } from '../repository/abstract.authentication.repository';

@Injectable()
export class SignInUseCase implements UseCase<SignInRequestObject, UserEntity> {
  private readonly repository = inject(AbstractAuthenticationRepository);

  execute(params?: SignInRequestObject) {
    return this.repository.signin(params);
  }
}
