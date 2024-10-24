import { inject, Injectable } from '@angular/core';

import { UseCase } from '../../../core/use.case.interface';
import { UserEntity } from '../entities/user.entity';
import { AbstractAuthenticationRepository } from '../repository/abstract.authentication.repository';

@Injectable()
export class SignInUseCase implements UseCase<unknown, UserEntity> {
  private readonly repository = inject(AbstractAuthenticationRepository);

  execute() {
    return this.repository.signIn();
  }
}
