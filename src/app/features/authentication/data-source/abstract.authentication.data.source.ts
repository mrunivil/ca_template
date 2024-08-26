import { Injectable } from '@angular/core';

import { SignInRequestObject } from '../authentication.feature.module';

@Injectable()
export abstract class AbstractAuthenticationDataSource {
  abstract signin(params: SignInRequestObject): Promise<any>;
  abstract signout(): Promise<any>;
}
