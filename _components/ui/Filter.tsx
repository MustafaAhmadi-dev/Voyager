"use client";

import { FilterProps } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

function Filter({ options, field }: FilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get(field) || options.at(0)?.value;

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  // function handleClick(value: string) {
  //   searchParams.set(field, value);
  //   if (searchParams.get("page")) searchParams.set("page", "1");

  //   setSearchParams(searchParams);
  // }

  return (
    <div className="border-2 border-solid border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 shadow-sm p-2 flex gap-2 rounded-full">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() =>
            router.push(`${pathname}?${createQueryString(field, option.value)}`)
          }
          disabled={option.value === currentFilter}
          className={`border-none bg-gray-100 dark:bg-gray-700 dark:text-slate-300 rounded-sm text-2xl py-2 px-3 transition-all hover:bg-[#4f46e5] hover:text-slate-200 ${
            option.value === currentFilter?.toString()
              ? "bg-red-400 dark:bg-sky-800 dark:text-slate-300"
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
