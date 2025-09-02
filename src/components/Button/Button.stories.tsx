import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import add from '@/assets/add.svg';
import addViolet from '@/assets/addBlack.svg';


import Button from '@/components/Button/Button';

/**
 * This is a simple button with a primary and secondary variant. It can also use 
 * an icon in addition to the label.
 */
const meta = {
    title: 'Design System/Atoms/Buttons',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            subtitle: "This button is meant to showcase the main storybook features."
        }
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This is the primary version of the button. It should be used for the most
 * impactful actions on the page.
 */
export const Primary: Story = {
    args: {
        label: "Storybook button",
        onClick: fn(),
        primary: true,
    },
};

/**
 * This is the secondary version of the button. Use it for actions with minimum
 * impact.
 */
export const Secondary: Story = {
    args: {
        ...Primary.args,
        primary: false,
    }
}

/**
 * You can also add an icon to the right of the label, using a string URL.
 */
export const PrimaryWithIcon: Story = {
    args: {
        ...Primary.args,
        iconUrl: add,
    }
}

/**
 * Also works for the secondary variant
 */
export const SecondaryWithIcon: Story = {
    args: {
        ...Secondary.args,
        iconUrl: addViolet,
    }
}