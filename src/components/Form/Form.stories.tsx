import type { Meta, StoryObj } from '@storybook/react-vite';


import Form from '@/components/Form/Form';

/**
 * This input is used to enter data in forms. 
 */
const meta = {
    title: "Design System/Molecules/Form",
    component: Form,
    parameters: {
        layout: 'centered',
        docs: {
            subtitle: "This form is used to show storybook features when working with a more complex component"
        }
    }
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
    args: {}
};
