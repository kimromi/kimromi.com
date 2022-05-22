import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';
import { StickyHeader } from './StickyHeader';

export default {
  title: 'layout/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const HeaderTemplate: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);
const StickyHeaderTemplate: ComponentStory<typeof StickyHeader> = (args) => (
  <StickyHeader {...args} />
);

export const Default = HeaderTemplate.bind({});

export const Sticky = StickyHeaderTemplate.bind({});
Sticky.args = {
  children: 'Header',
};
