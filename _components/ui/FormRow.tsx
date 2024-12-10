import { ComponentPropsWithoutRef, ReactElement } from "react";

type FormRowProps = {
  children: ReactElement;
  label?: string;
  error?: string;
} & ComponentPropsWithoutRef<"div">;

function FormRow({ children, label, error }: FormRowProps) {
  return (
    <div className="grid items-center gap-0 sm:gap-10 grid-flow-row sm:grid-cols-[1.5fr_1fr_1fr] md:grid-cols-[24rem_1fr_1.2fr] py-1 sm:py-5 px-0 has-[::button]:flex has-[::button]:justify-end has-[::button]:gap5 first:pt-0 last:pb-0 border-b-2 border-solid border-b-gray-100 dark:border-b-gray-700">
      {label && (
        <label className="font-semibold" htmlFor={children!.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && (
        <span className="text-xs md:text-2xl text-red-500">{error}</span>
      )}
    </div>
  );
}

export default FormRow;
