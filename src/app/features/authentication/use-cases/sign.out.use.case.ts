import { inject, Injectable } from '@angular/core';

import { UseCase } from '../../../core/use.case.interface';
import { AbstractAuthenticationRepository } from '../repository/abstract.authentication.repository';

@Injectable()
export class SignOutUseCase implements UseCase<undefined, void> {
  private readonly repository = inject(AbstractAuthenticationRepository);

  execute() {
    return this.repository.signout();
  }
}
