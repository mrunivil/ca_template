import { Injectable } from '@angular/core';

import { SignInRequestObject } from '../authentication.feature.module';

@Injectable()
export abstract class AbstractAuthenticationDataSource {
  abstract signIn(params: SignInRequestObject): Promise<any>;
  abstract signOut(): Promise<any>;
}
