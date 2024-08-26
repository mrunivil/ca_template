export namespace Authentication {
  export class SignInAction {
    static readonly type = '[AUTH] sign in user';
  }
  export class SignOutAction {
    static readonly type = '[AUTH] sign out user';
  }
}
