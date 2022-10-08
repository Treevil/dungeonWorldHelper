import React from 'react';
import MoveCard from "./MoveCard"


export default {
    component: MoveCard,
};

const Template = (args) => <MoveCard {...args} />;

export const defaultUsage = Template.bind({});
defaultUsage.args = {};
