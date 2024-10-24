import { Injectable } from '@angular/core';

import { SignInRequestObject } from '../authentication.feature.module';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export abstract class AbstractAuthenticationRepository {
  abstract signIn(params?: SignInRequestObject): Promise<UserEntity | Error>;
  abstract signOut(): Promise<void | Error>;
}
