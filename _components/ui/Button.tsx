import React, { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "@/_lib/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVaraints> {
  children: React.ReactNode;
}
export default function Button({
  children,
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(buttonVaraints({ variant, size, className }))}
    >
      {children}
    </button>
  );
}

const buttonVaraints = cva("shadow-sm rounded-md cursor-pointer border-none", {
  variants: {
    variant: {
      theme: "text-sky-100 bg-orange hover:bg-orange-dark",
      primary: "text-sky-100 bg-sky-500 hover:bg-sky-800",
      secondary:
        "text-balck dark:text-slate-300 bg-gray-300 dark:bg-gray-500 hover:bg-gray-400 dark:hover:bg-gray-700",
      danger: "text-red-100 bg-red-600 hover:bg-red-800",
    },
    size: {
      small: "text-xl py-2 px-4 text-center font-semibold uppercase",
      medium: "text-2xl py-5 px-8",
      large: "text-3xl py-5 px-10",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});
