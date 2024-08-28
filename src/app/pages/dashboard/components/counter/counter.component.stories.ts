import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { CounterComponent } from './counter.component';

const meta: Meta<CounterComponent> = {
  component: CounterComponent,
  decorators: [
    // Apply application config to all stories
    applicationConfig({
      // List of providers and environment providers that should be available to the root component and all its children.
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
};

export default meta;

type Story = StoryObj<CounterComponent>;

export const WithCustomApplicationProvider: Story = {
  args: {
    value: {
      value: 5,
    },
  },
};
