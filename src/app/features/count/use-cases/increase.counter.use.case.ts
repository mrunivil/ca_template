import { inject, Injectable } from '@angular/core';

import { UseCase } from '../../../core/use.case.interface';
import { NumberEntity } from '../entities/number.entity';
import { AbstractCounterRepository } from '../repository/abstract.counter.repository';

@Injectable()
export class IncreaseCounterUseCase implements UseCase<unknown, NumberEntity> {
  private readonly repository = inject(AbstractCounterRepository);

  execute() {
    return this.repository.increaseCounter();
  }
}
