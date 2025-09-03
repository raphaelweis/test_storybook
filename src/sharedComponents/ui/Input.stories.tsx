import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "@/sharedComponents/ui/Input";
import { Button } from "@/sharedComponents/ui/Button";

/**
 * This is a simple input, initially generated using shadcn.
 */
const meta = {
  title: "shadcn/Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      subtitle: "This input is meant to showcase the main storybook features.",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This is the default variant of the input. The user hasn't yet interacted with
 * it.
 */
export const Default: Story = {
  args: {
    placeholder: "Shadcn input...",
  },
};

export const File: Story = {
  args: {
    ...Default.args,
    type: "file",
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const WithButton: Story = {
  args: {
    ...Default.args,
    type: "email",
  },
  render: (args) => (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input {...args} />
      <Button type="submit" variant="outline">
        Subscribe
      </Button>
    </div>
  ),
};
