import { inject, Injectable } from '@angular/core';

import { NumberEntity } from '../../../core/entities/number.entity';
import { UseCase } from '../../../core/use.case.interface';
import { AbstractCountRepository } from '../repository/abstract.count.repository';

@Injectable()
export class DecreaseCountUseCase implements UseCase<unknown, NumberEntity> {
  private readonly repository = inject(AbstractCountRepository);

  execute() {
    return this.repository.decreaseCount();
  }
}
