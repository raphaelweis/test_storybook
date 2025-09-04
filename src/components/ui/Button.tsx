import * as React from "react";
import { type VariantProps } from "class-variance-authority";

import {
  Button as SharedButton,
  buttonVariants,
} from "@/sharedComponents/ui/button";

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export default function Button({ children, ...props }: ButtonProps) {
  return <SharedButton {...props}>{children}</SharedButton>;
}
