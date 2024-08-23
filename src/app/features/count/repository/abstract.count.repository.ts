import { Injectable } from '@angular/core';

import { NumberEntity } from '../../../core/entities/number.entity';

@Injectable()
export abstract class AbstractCountRepository {
  abstract getCount(): Promise<NumberEntity | Error>;
  abstract increaseCount(): Promise<NumberEntity | Error>;
  abstract decreaseCount(): Promise<NumberEntity | Error>;
}
