import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="py-12 px-10 my-0 mx-auto max-w-screen-xl">{children}</div>
  );
};

export default Container;
