import { UserEntity } from '../../features/authentication/entities/user.entity';

export type AuthenticationStateModel = {
  loading?: boolean;
  currentUser?: UserEntity;
};
