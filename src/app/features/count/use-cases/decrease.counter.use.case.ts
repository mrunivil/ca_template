import { inject, Injectable } from '@angular/core';

import { NumberEntity } from '../../../core/entities/number.entity';
import { UseCase } from '../../../core/use.case.interface';
import { AbstractCounterRepository } from '../repository/abstract.counter.repository';

@Injectable()
export class DecreaseCounterUseCase implements UseCase<unknown, NumberEntity> {
  private readonly repository = inject(AbstractCounterRepository);

  execute() {
    return this.repository.decreaseCounter();
  }
}
