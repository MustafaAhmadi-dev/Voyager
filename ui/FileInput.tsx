import { ComponentPropsWithoutRef, forwardRef } from "react";

type FileInputProps = ComponentPropsWithoutRef<"input">;
const FileInput = forwardRef<HTMLInputElement, FileInputProps>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      type="file"
      className="font-inherit font-medium py-2 px-3 mr-3 rounded-sm border-none text-brand-50 bg-brand-600 cursor-pointer transition-colors duration-200 hover:bg-brand-700"
    />
  );
});

export default FileInput;
