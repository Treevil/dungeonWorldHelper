import React from 'react';
import MonsterCard from "./MonsterCard"


export default {
    title: '',
    component: MonsterCard,
};

const Template = (args) => <MonsterCard {...args} />;

export const defaultUsage = Template.bind({});
defaultUsage.args = {};
