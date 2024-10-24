import { delay, http, HttpResponse } from 'msw';

import {
  signInEndPoint,
  signOutEndPoint,
} from '../data-source/default.authentication.data.source';
import { UserEntity } from '../entities/user.entity';

export const AUTHENTICATION_FEATURE_MOCK_HANDLER = [
  http.post(signInEndPoint, async () => {
    await delay(1000);
    return HttpResponse.json(
      new UserEntity({
        name: 'John Doe',
      }),
    );
  }),
  http.post(signOutEndPoint, async () => {
    await delay(1000);
    return HttpResponse.json({});
  }),
];
