import { fn } from '@storybook/test';

import { CounterComponent } from './counter.component';

import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta<CounterComponent> = {
  title: 'Components/Counter',
  component: CounterComponent,
  tags: ['autodocs'],
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    decreaseCounter: fn(),
    increaseCounter: fn(),
  },
};

export default meta;
type Story = StoryObj<CounterComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    value: { value: 0 },
  },
};
