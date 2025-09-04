import * as React from "react";

import { Input as SharedInput } from "@/sharedComponents/ui/input";

type InputProps = React.ComponentProps<"input">;

export default function Input({ children, ...props }: InputProps) {
  return <SharedInput {...props}>{children}</SharedInput>;
}
