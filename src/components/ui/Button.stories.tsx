import type { Meta, StoryObj } from "@storybook/react-vite";

import Add from "@/assets/add.svg?react";

import Button from "@/components/ui/Button";

/**
 * This is a simple button, initially generated using shadcn.
 */
const meta = {
  title: "shadcn/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "This button is meant to showcase the main storybook features.",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This is the default variant of the button.
 */
export const Default: Story = {
  args: {
    variant: "default",
    children: "shadcn button",
  },
};

/**
 * Use for actions such as deleting an element.
 */
export const Destructive: Story = {
  args: {
    ...Default.args,
    variant: "destructive",
  },
};

/**
 * Use for less important actions, usually next to a default button.
 */
export const Outline: Story = {
  args: {
    ...Default.args,
    variant: "outline",
  },
};

/**
 * Use for less important actions, usually next to a default button.
 */
export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: "secondary",
  },
};

/**
 * This button blends in with the text around it.
 */
export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: "ghost",
  },
};

/**
 * This button represents a link. It can be inserted directly in text.
 */
export const Link: Story = {
  args: {
    ...Default.args,
    variant: "link",
  },
};

/**
 * Smaller version of the default button
 */
export const Small: Story = {
  args: {
    ...Default.args,
    size: "sm",
  },
};

/**
 * Bigger version of the default button
 */
export const Large: Story = {
  args: {
    ...Default.args,
    size: "lg",
  },
};

const add = <Add className="fill-primary-foreground" />;

/**
 * You can also use an icon instead of text
 */
export const Icon: Story = {
  args: {
    children: add,
    size: "icon",
  },
};

/**
 * Any combination of children is valid, so you can also put a label and an icon,
 * for example.
 */
export const LabelIcon: Story = {
  args: {
    children: <>shadcn button {add}</>,
  },
};
