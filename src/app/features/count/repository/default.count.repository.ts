import { inject, Injectable } from '@angular/core';

import { NumberEntity } from '../../../core/entities/number.entity';
import { AbstractCountDataSource } from '../data-source/abstract.count.data.source';
import { AbstractCountRepository } from './abstract.count.repository';

@Injectable()
export class DefaultCountRepository extends AbstractCountRepository {
  private readonly dataSource = inject(AbstractCountDataSource);

  override async getCount(): Promise<NumberEntity | Error> {
    try {
      const raw = await this.dataSource.getCount();
      return NumberEntity.fromJson(raw);
    } catch (error) {
      return new Error('server Error');
    }
  }

  override async increaseCount(): Promise<NumberEntity | Error> {
    try {
      const raw = await this.dataSource.increaseCount();
      return NumberEntity.fromJson(raw);
    } catch (error) {
      return new Error('server Error');
    }
  }

  override async decreaseCount(): Promise<NumberEntity | Error> {
    try {
      const raw = await this.dataSource.decreaseCount();
      return NumberEntity.fromJson(raw);
    } catch (error) {
      return new Error('server Error');
    }
  }
}
