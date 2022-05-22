import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LinkCard } from './LinkCard';

export default {
  title: 'ui/LinkCard',
  component: LinkCard,
} as ComponentMeta<typeof LinkCard>;

const Template: ComponentStory<typeof LinkCard> = (args) => (
  <LinkCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Title',
  note: 'Note',
};
