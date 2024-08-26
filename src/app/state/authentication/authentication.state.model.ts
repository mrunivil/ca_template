import { UserEntity } from '../../core/entities/user.entity';

export type AuthenticationStateModel = {
  loading?: boolean;
  currentUser?: UserEntity;
};
