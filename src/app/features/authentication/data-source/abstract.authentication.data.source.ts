import { Injectable } from '@angular/core';

@Injectable()
export abstract class AbstractAuthenticationDataSource {
  abstract signIn(): Promise<any>;
  abstract signOut(): Promise<any>;
}
