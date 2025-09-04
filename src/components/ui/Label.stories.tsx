import type { Meta, StoryObj } from "@storybook/react-vite";

import Label from "@/components/ui/Label";

/**
 * This is a simple and accessible label, generated using shadcn.
 */
const meta = {
  title: "shadcn/Atoms/Label",
  component: Label,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "This label is meant to showcase the main storybook features.",
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The label is very simple, simply pass in any string as the children.
 */
export const Default: Story = {
  args: {
    children: "Storybook label.",
  },
};
