import { delay, http, HttpResponse } from 'msw';

import { UserEntity } from '../../../core/entities/user.entity';
import { signInEndPoint } from '../data-source/default.authentication.data.source';

export const AUTHENTICATION_FEATURE_MOCK_HANDLER = [
  http.post(signInEndPoint, async () => {
    await delay(1000);
    return HttpResponse.json(
      new UserEntity({
        name: 'John Doe',
      })
    );
  }),
];
