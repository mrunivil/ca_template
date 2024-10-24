export class UserEntity {
  name? = 'unknown';

  constructor(obj: Partial<UserEntity>) {
    Object.assign(this, obj);
  }

  static fromJson(json: any) {
    return new UserEntity({
      name: json.name,
    });
  }

  static toJson(obj: UserEntity) {
    return {
      name: obj.name,
    };
  }
}
