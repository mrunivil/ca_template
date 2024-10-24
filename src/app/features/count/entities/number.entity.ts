export class NumberEntity {
  value? = 0;

  constructor(obj: Partial<NumberEntity>) {
    Object.assign(this, obj);
  }

  static fromJson(json: any) {
    return new NumberEntity({
      value: parseInt(json),
    });
  }

  static toJson(obj: NumberEntity) {
    return {
      numberValue: obj.value,
    };
  }
}
