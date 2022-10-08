import React from 'react';
import GameIcon from "./GameIcon"


export default {
  title: 'Icons/GameIcon',
  component: GameIcon,
  argTypes: {
    fill: { control: 'color' },
  },
};

const Template = (args) => <GameIcon {...args} />;

export const defaultUsage = Template.bind({});
defaultUsage.args = {
  icon: 'policeBadge',
  fill: '#000',
  fontSize: '200px',
};
