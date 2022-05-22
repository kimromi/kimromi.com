import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ExternalServices } from './ExternalServices';

export default {
  title: 'ui/ExternalServices',
  component: ExternalServices,
} as ComponentMeta<typeof ExternalServices>;

const Template: ComponentStory<typeof ExternalServices> = (args) => (
  <ExternalServices {...args} />
);

export const Default = Template.bind({});
