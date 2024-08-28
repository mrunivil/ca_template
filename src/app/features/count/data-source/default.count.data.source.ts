import { lastValueFrom } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { AbstractCounterDataSource } from './abstract.count.data.source';

export const getCounterEndPoint = `${environment.backend}/count`;
export const increaseCounterEndPoint = `${environment.backend}/count/increase`;
export const decreaseCounterEndPoint = `${environment.backend}/count/decrease`;
export const resetCounterEndPoint = `${environment.backend}/count/reset`;

@Injectable()
export class DefaultCounterDataSource extends AbstractCounterDataSource {
  private readonly http = inject(HttpClient);

  override async getCounter(): Promise<string> {
    return lastValueFrom(this.http.get<string>(getCounterEndPoint));
  }
  override async increaseCounter(): Promise<string> {
    return lastValueFrom(
      this.http.patch<string>(increaseCounterEndPoint, undefined)
    );
  }
  override async decreaseCounter(): Promise<string> {
    return lastValueFrom(
      this.http.patch<string>(decreaseCounterEndPoint, undefined)
    );
  }

  override resetCounter(): Promise<string> {
    throw new Error('not implemented yet');
  }
}
