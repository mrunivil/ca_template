export namespace Counter {
  export class IncreaseCounterAction {
    static readonly type = '[COUNT] increase current count by 1';
  }
  export class DecreaseCounterAction {
    static readonly type = '[COUNT] decrease current count by 1';
  }
  export class GetCounterAction {
    static readonly type = '[COUNT] get current count';
  }
  export class ResetCounterAction {
    static readonly type = '[COUNT] reset current count';
  }
}
