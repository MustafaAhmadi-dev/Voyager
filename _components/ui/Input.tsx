import React, { ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref
) {
  return (
    <input
      ref={ref}
      {...props}
      className="border-2 border-solid border-gray-400 bg-gray-100 dark:bg-gray-600 rounded-sm py-3 px-0 sm:px-5 shadow-sm"
    />
  );
});

export default Input;
