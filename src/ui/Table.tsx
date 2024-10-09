import { createContext, ReactNode, useContext } from "react";

type TableContextValues = { columns: string };
const TableContext = createContext({} as TableContextValues);

type TableProps = {
  children: ReactNode;
  columns: string;
};
function Table({ children, columns }: TableProps) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        role="table"
        className="border-2 border-solid border-gray-200 dark:border-gray-800 text-2xl bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden dark:text-slate-200"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }: { children: ReactNode }) {
  const { columns } = useContext(TableContext);
  return (
    <header
      role="row"
      className="grid items-center colg transition-none gap-x-10 py-6 px-10 border-b-2 border-b-gray-200 dark:border-b-gray-900 uppercase font-semibold text-gray-800 dark:text-slate-300"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </header>
  );
}

function Row({ children }: { children: ReactNode }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      role="row"
      className="grid items-center colg transition-none gap-x-10 py-6 px-10 border-b-2 border-b-gray-200 dark:border-b-gray-900 last:border-b-0"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

interface BodyProps<T> {
  data: T[];
  render: (dataItem: T) => React.ReactNode;
}
function Body<T>({ data, render }: BodyProps<T>) {
  if (!data.length)
    return (
      <p className="text-2xl text-center m-10">No data to show at the moment</p>
    );

  return <section className="my-2 mx-0">{data.map(render)}</section>;
}

function Footer({ children }: { children?: ReactNode }) {
  return (
    <footer
      className={`${
        children ? "flex" : "hidden"
      } bg-gray-100 dark:bg-gray-600 dark:text-slate-100 justify-center p-5`}
    >
      {children}
    </footer>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
