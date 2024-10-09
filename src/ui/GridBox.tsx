import { ReactNode } from "react";

function GridBox({ children }: { children: ReactNode }) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        w-fit lg:w-[110rem] gap-12 py-0 px-12 my-0 mx-auto"
      style={{ gridTemplateRows: "auto" }}
    >
      {children}
    </div>
  );
}

export default GridBox;
