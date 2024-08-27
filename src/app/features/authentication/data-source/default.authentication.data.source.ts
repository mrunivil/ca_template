import { lastValueFrom } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { SignInRequestObject } from '../authentication.feature.module';
import { AbstractAuthenticationDataSource } from './abstract.authentication.data.source';

export const signInEndPoint = `${environment.backend}/sign-in`;
export const signOutEndPoint = `${environment.backend}/sign-out`;

@Injectable()
export class DefaultAuthenticationDataSource extends AbstractAuthenticationDataSource {
  private readonly http = inject(HttpClient);

  override async signIn(params: SignInRequestObject): Promise<any> {
    return lastValueFrom(this.http.post(signInEndPoint, { params }));
  }

  override signOut(): Promise<any> {
    return lastValueFrom(this.http.post(signOutEndPoint, {}));
  }
}
