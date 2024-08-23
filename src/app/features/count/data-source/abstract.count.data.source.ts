import { Injectable } from '@angular/core';

@Injectable()
export abstract class AbstractCountDataSource {
  abstract getCount(): Promise<string>;
  abstract increaseCount(): Promise<string>;
  abstract decreaseCount(): Promise<string>;
}
