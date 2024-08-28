import { inject, Injectable } from '@angular/core';

import { NumberEntity } from '../../../core/entities/number.entity';
import { UseCase } from '../../../core/use.case.interface';
import { AbstractCounterRepository } from '../repository/abstract.counter.repository';

@Injectable()
export class ResetCounterUseCase implements UseCase<undefined, NumberEntity> {
  private readonly repository = inject(AbstractCounterRepository);

  execute(): Promise<NumberEntity | Error> {
    return this.repository.resetCounter();
  }
}
