import { Injectable } from '@angular/core';

@Injectable()
export abstract class AbstractCounterDataSource {
  abstract getCounter(): Promise<string>;
  abstract increaseCounter(): Promise<string>;
  abstract decreaseCounter(): Promise<string>;
  abstract resetCounter(): Promise<string>;
}
