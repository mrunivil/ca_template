import { inject, Injectable } from '@angular/core';

import { UserEntity } from '../../../core/entities/user.entity';
import { SignInRequestObject } from '../authentication.feature.module';
import { AbstractAuthenticationDataSource } from '../data-source/abstract.authentication.data.source';
import { AbstractAuthenticationRepository } from './abstract.authentication.repository';

@Injectable()
export class DefaultAuthenticationRepository extends AbstractAuthenticationRepository {
  private readonly dataSource = inject(AbstractAuthenticationDataSource);

  override async signin(
    params?: SignInRequestObject
  ): Promise<UserEntity | Error> {
    if (!params) return new Error('missing params');

    try {
      const raw = await this.dataSource.signin(params);
      return UserEntity.fromJson(raw);
    } catch (error) {
      return error as Error;
    }
  }

  override async signout(): Promise<void | Error> {
    try {
      return await this.dataSource.signout();
    } catch (error) {
      return error as Error;
    }
  }
}
