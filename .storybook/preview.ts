import type { Preview } from "@storybook/react-vite";
import "@/index.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        dark: { name: "dark", value: "#0a0a0a" },
        light: { name: "light", value: "#ffffff" },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  tags: ["autodocs"],
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [
    (Story, context) => {
      const selectedTheme = context.globals.theme || "light";
      const htmlElement = document.documentElement;

      htmlElement.classList.remove("light", "dark");
      htmlElement.classList.add(selectedTheme);

      return Story();
    },
  ],
};

export default preview;
