// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import Button from './Button';

//👇 This default export determines where your story goes in the story list
const meta = {
    component: Button,
    parameters: {
        layout: 'centered',
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: "Storybook button",
        onClick: fn(),
        primary: true,
    },
};

export const Secondary: Story = {
    args: {
        ...Primary.args,
        primary: false,
    }
}