import { inject, Injectable } from '@angular/core';

import { UseCase } from '../../../core/use.case.interface';
import { NumberEntity } from '../entities/number.entity';
import { AbstractCounterRepository } from '../repository/abstract.counter.repository';

@Injectable()
export class ResetCounterUseCase implements UseCase<undefined, NumberEntity> {
  private readonly repository = inject(AbstractCounterRepository);

  execute(): Promise<NumberEntity | Error> {
    return this.repository.resetCounter();
  }
}
