import { ComponentPropsWithoutRef, ReactElement } from "react";

type FormRowVerticalProps = {
  children: ReactElement;
  label?: string;
  error?: string;
} & ComponentPropsWithoutRef<"div">;

function FormRowVertical({ children, label, error }: FormRowVerticalProps) {
  return (
    <div className="flex flex-col gap-3 py-5 px-0">
      {label && (
        <label className="font-semibold" htmlFor={children.props.id}>
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

export default FormRowVertical;
