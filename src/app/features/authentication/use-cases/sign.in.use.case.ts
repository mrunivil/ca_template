import { inject, Injectable } from '@angular/core';

import { UserEntity } from '../../../core/entities/user.entity';
import { UseCase } from '../../../core/use.case.interface';
import { AbstractAuthenticationRepository } from '../repository/abstract.authentication.repository';

@Injectable()
export class SignInUseCase implements UseCase<unknown, UserEntity> {
  private readonly repository = inject(AbstractAuthenticationRepository);

  execute() {
    return this.repository.signIn();
  }
}
