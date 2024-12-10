import { HTMLAttributes, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "@/_lib/utils";

interface RowProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof rowVariants> {
  children: ReactNode;
}
function Row({ children, variant, className }: RowProps) {
  return (
    <div className={cn(rowVariants({ variant, className }))}>{children}</div>
  );
}

const rowVariants = cva("flex", {
  variants: {
    variant: {
      horizontal: "items-center justify-between",
      vertical: "flex-col gap-6",
    },
  },
  defaultVariants: {
    variant: "vertical",
  },
});

export default Row;
