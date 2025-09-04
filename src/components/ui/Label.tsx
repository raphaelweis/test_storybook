import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { Label as SharedLabel } from "@/sharedComponents/ui/label";

type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root>;

export default function Label({ children, ...props }: LabelProps) {
  return <SharedLabel {...props}>{children}</SharedLabel>;
}
