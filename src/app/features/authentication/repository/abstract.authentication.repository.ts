import { Injectable } from '@angular/core';

import { UserEntity } from '../../../core/entities/user.entity';
import { SignInRequestObject } from '../authentication.feature.module';

@Injectable()
export abstract class AbstractAuthenticationRepository {
  abstract signIn(params?: SignInRequestObject): Promise<UserEntity | Error>;
  abstract signOut(): Promise<void | Error>;
}
