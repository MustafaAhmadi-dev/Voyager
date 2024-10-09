import React from "react";
import { useSearchParams } from "react-router-dom";
import { Option } from "./Filter";

function SortBy({ options }: { options: Option[] }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <select
      value={sortBy}
      onChange={handleChange}
      className="text-2xl py-3 px-5 border-2 border-solid dark:border-gray-600 dark:text-slate-300 rounded-sm bg-gray-100 dark:bg-gray-700 shadow-sm"
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label || option.value}
        </option>
      ))}
    </select>
  );
}

export default SortBy;
