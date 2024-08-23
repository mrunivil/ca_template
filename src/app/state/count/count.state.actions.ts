export namespace Count {
  export class IncreaseCountAction {
    static readonly type = '[COUNT] increase current count by 1';
  }
  export class DecreaseCountAction {
    static readonly type = '[COUNT] decrease current count by 1';
  }
  export class GetCountAction {
    static readonly type = '[COUNT] get current count';
  }
}
