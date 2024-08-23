import { lastValueFrom } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { AbstractCountDataSource } from './abstract.count.data.source';

export const getCountEndPoint = `${environment.backend}/count`;
export const increaseCountEndPoint = `${environment.backend}/count/increase`;
export const decreaseCountEndPoint = `${environment.backend}/count/decrease`;
@Injectable()
export class DefaultCountDataSource extends AbstractCountDataSource {
  private readonly http = inject(HttpClient);

  override async getCount(): Promise<string> {
    return lastValueFrom(this.http.get<string>(getCountEndPoint));
  }
  override async increaseCount(): Promise<string> {
    return lastValueFrom(
      this.http.patch<string>(increaseCountEndPoint, undefined)
    );
  }
  override async decreaseCount(): Promise<string> {
    return lastValueFrom(
      this.http.patch<string>(decreaseCountEndPoint, undefined)
    );
  }
}
