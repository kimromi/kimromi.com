import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

export const Sticky = Template.bind({});
Sticky.args = {
  isSticky: true,
  children: (
    <>
      <span className="px-2 text-sm text-gray-600">/</span>
      Header
    </>
  ),
};
