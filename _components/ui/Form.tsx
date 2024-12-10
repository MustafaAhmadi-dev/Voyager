import cn from "@/_lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FormHTMLAttributes, ReactNode } from "react";

interface FormProps
  extends FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof formVaraints> {
  children: ReactNode;
}

function Form({ children, variant, className, ...props }: FormProps) {
  return (
    <form className={cn(formVaraints({ variant, className }))} {...props}>
      {children}
    </form>
  );
}

export default Form;

const formVaraints = cva(
  "overflow-hidden text-1xl md:text-2xl dark:text-slate-200",
  {
    variants: {
      variant: {
        modal: "w-[35rem] sm:w-[80rem]",
        regular:
          "py-10 px-16 bg-gray-50 dark:bg-gray-900 rounded-md border-gray-100 dark:border-gray-500 border-solid border-2",
      },
    },
    defaultVariants: {
      variant: "regular",
    },
  }
);
