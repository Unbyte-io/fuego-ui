import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tabs from '.';
import Tab from '../tab';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    fullWidth: {
      type: 'boolean',
    },
    scrollable: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tab label="tab1">
      <div>
        <p>Tab 1</p>
      </div>
    </Tab>
    <Tab label="tab2">
      <div>
        <p>Tab 2</p>
      </div>
    </Tab>
  </Tabs>
);

const ScrollTemplate: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tab label="tab1" className="woo">
      <div>
        <p>Tab 1</p>
      </div>
    </Tab>
    <Tab label="tab2">
      <div>
        <p>Tab 2</p>
      </div>
    </Tab>
    <Tab label="tab3">
      <div>
        <p>Tab 3</p>
      </div>
    </Tab>
    <Tab label="tab4">
      <div>
        <p>Tab 4</p>
      </div>
    </Tab>
    <Tab label="tab5">
      <div>
        <p>Tab 5</p>
      </div>
    </Tab>
    <Tab label="tab6">
      <div>
        <p>Tab 6</p>
      </div>
    </Tab>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export const Scrollable = ScrollTemplate.bind({});
Scrollable.args = {
  scrollable: true,
};

export const ScrollableAndFullWidth = ScrollTemplate.bind({});
ScrollableAndFullWidth.args = {
  scrollable: true,
  fullWidth: true,
};
