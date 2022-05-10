import { ComponentStory, ComponentMeta } from '@storybook/react';

const Color: React.FC = () => (
  <div className="w-screen h-screen p-4 bg-white">
    <div className="p-4 bg-primary text-black">Primary</div>
    <div className="p-4 bg-secondary">Secondary</div>
    <div className="p-4 bg-tertiary">Tertiary</div>
    <div className="p-4 bg-background">Background</div>
  </div>
);

export default {
  title: 'base/Color',
  component: Color,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Color>;

const Template: ComponentStory<typeof Color> = (args) => <Color />;

export const Default = Template.bind({});
