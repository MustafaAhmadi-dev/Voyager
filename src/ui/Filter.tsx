import { useSearchParams } from "react-router-dom";

export interface Option {
  value: string;
  label: string;
}

type FilterProps = {
  options: Option[];
  field: string;
};
function Filter({ options, field }: FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(field) || options.at(0)?.value;

  function handleClick(value: string) {
    searchParams.set(field, value);
    if (searchParams.get("page")) searchParams.set("page", "1");

    setSearchParams(searchParams);
  }

  return (
    <div className="border-2 border-solid border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 shadow-sm p-2 flex gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={option.value === currentFilter}
          className={`border-none bg-gray-100 dark:bg-gray-700 dark:text-slate-300 rounded-sm text-2xl py-2 px-3 transition-all hover:bg-[#4f46e5] hover:text-slate-200 ${
            option.value === currentFilter?.toString()
              ? "bg-[#4f46e5] dark:bg-sky-800 text-slate-200 dark:text-slate-300"
              : ""
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
