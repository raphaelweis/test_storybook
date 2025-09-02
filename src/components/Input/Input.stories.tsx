import type { Meta, StoryObj } from '@storybook/react-vite';


import Input from '@/components/Input/Input';

/**
 * This input is used to enter data in forms. 
 */
const meta = {
    title: "Design System/Atoms/Input",
    component: Input,
    parameters: {
        layout: 'centered',
        docs: {
            subtitle: "This input is meant to showcase the main storybook features."
        }
    }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This this the input in the neutral state, when the user has not yet interacted 
 * with it.
 */
export const Neutral: Story = {
    args: {
        placeholder: "Storybook input...",
    }
};


/**
 * This input is in an error state. It is highlighted in red and there is an error 
 * message describing the issue.
 */
export const Error: Story = {
    args: {
        ...Neutral.args,
        error: "This input is in an error state",
    }
};


/**
 * This input is in an info state. It has a piece of information attached to it.
 */
export const Info: Story = {
    args: {
        ...Neutral.args,
        info: "This input has an information attached to it",
    }
}