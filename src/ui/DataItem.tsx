import { ReactNode } from "react";
import { IconType } from "react-icons";

type DataItemProps = {
  Icon: IconType;
  label: string;
  children: ReactNode;
};
function DataItem({ Icon, label, children }: DataItemProps) {
  return (
    <div className="flex items-center gap-6 py-3 px-0">
      <span className="flex items-center gap-3 font-[500]">
        <Icon className="w-8 h-8 text-sky-800" />
        <span>{label}</span>
      </span>
      {children}
    </div>
  );
}

export default DataItem;
