import { Injectable } from '@angular/core';

import { NumberEntity } from '../../../core/entities/number.entity';

@Injectable()
export abstract class AbstractCounterRepository {
  abstract getCounter(): Promise<NumberEntity | Error>;
  abstract increaseCounter(): Promise<NumberEntity | Error>;
  abstract decreaseCounter(): Promise<NumberEntity | Error>;
  abstract resetCounter(): Promise<NumberEntity | Error>;
}
