import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading } from './Heading';

export default {
  title: 'ui/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Heading1 = Template.bind({});
Heading1.args = {
  level: 1,
  children: 'Heading 1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  level: 2,
  children: 'Heading 2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  level: 3,
  children: 'Heading 3',
};
