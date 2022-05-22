import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tag } from './Tag';
import { Tags } from './Tags';

export default {
  title: 'ui/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => (
  <Tags>
    <Tag {...args} />
    <Tag {...args} />
    <Tag {...args} />
    <Tag {...args} />
    <Tag {...args} />
  </Tags>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Tag',
};
