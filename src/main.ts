import { setupWorker } from 'msw/browser';

import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { AUTHENTICATION_FEATURE_MOCK_HANDLER } from './app/features/authentication/_mock/authentication.feature.mock';
import { COUNT_FEATURE_MOCK_HANDLER } from './app/features/count/_mock/count.feature.mock';
import { environment } from './environments/environment';

const bootstrap = () =>
  bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
  );

const MOCK_HANDLER = [
  ...COUNT_FEATURE_MOCK_HANDLER,
  ...AUTHENTICATION_FEATURE_MOCK_HANDLER,
];
if (!!environment.useMock) {
  const server = setupWorker(...MOCK_HANDLER);
  server
    .start({
      onUnhandledRequest: (req) => {
        if (req.url.includes(environment.backend)) {
          console.warn(`missing mock handler: ${req.url}`);
        }
      },
    })
    .then(() => bootstrap());
} else {
  bootstrap();
}
