import { inject, Injectable } from '@angular/core';

import { AbstractCounterDataSource } from '../data-source/abstract.count.data.source';
import { NumberEntity } from '../entities/number.entity';
import { AbstractCounterRepository } from './abstract.counter.repository';

@Injectable()
export class DefaultCounterRepository extends AbstractCounterRepository {
  private readonly dataSource = inject(AbstractCounterDataSource);

  override async getCounter(): Promise<NumberEntity | Error> {
    try {
      const raw = await this.dataSource.getCounter();
      return NumberEntity.fromJson(raw);
    } catch (error: any) {
      return new Error(
        error.statusText ?? error.message ?? 'Etwas ist schief gelaufen',
      );
    }
  }

  override async increaseCounter(): Promise<NumberEntity | Error> {
    try {
      const raw = await this.dataSource.increaseCounter();
      return NumberEntity.fromJson(raw);
    } catch (error: any) {
      return new Error(
        error.statusText ?? error.message ?? 'Etwas ist schief gelaufen',
      );
    }
  }

  override async decreaseCounter(): Promise<NumberEntity | Error> {
    try {
      const raw = await this.dataSource.decreaseCounter();
      return NumberEntity.fromJson(raw);
    } catch (error: any) {
      return new Error(
        error.statusText ?? error.message ?? 'Etwas ist schief gelaufen',
      );
    }
  }

  override resetCounter(): Promise<NumberEntity | Error> {
    throw new Error('not implemented yet');
  }
}
