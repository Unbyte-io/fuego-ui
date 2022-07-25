import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  level: 'primary',
  label: 'Primary',
  corners: 'squared',
  fullwidth: false,
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  level: 'secondary',
  corners: 'squared',
  fullwidth: false,
  children: 'Secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Tertiary',
  level: 'tertiary',
  corners: 'squared',
  fullwidth: false,
  children: 'Tertiary',
};