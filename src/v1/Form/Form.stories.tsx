import type { Meta, StoryObj } from "@storybook/react-vite";

import LoginForm from "@/v1/Form/Form";

/**
 * This input is used to enter data in forms.
 */
const meta = {
  title: "V1/Molecules/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
    docs: {
      subtitle:
        "This form is used to show storybook features when working with a more complex component",
    },
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This is the form's default state, when the user hasn't yet interacted with it.
 */
export const Neutral: Story = {
  args: {
    loggedIn: false,
  },
};

/**
 * This is the form's default state, when the user hasn't yet interacted with it.
 */
export const LoginFailed: Story = {
  args: {
    ...Neutral.args,
    error: "Email or password is incorrect!",
  },
};

/**
 * If the login attempt was successful, the form will display a success message.
 */
export const LoggedIn: Story = {
  args: {
    loggedIn: true,
  },
};
