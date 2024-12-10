"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Option } from "@/types";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "./select";

function SortBy({ options }: { options: Option[] }) {
  const router = useRouter();
  const path = usePathname();
  // console.log('path',path);

  function handleSort(value: string) {
    router.push(`${path}?sortBy=${value}`);
  }

  // function handleSort(e: React.ChangeEvent<HTMLSelectElement>) {
  //   router.push(`${path}?sort=${e.target.value}`);
  // }
  // const sortBy = searchParams.get("sortBy") || "";

  // function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
  //   searchParams.set("sortBy", e.target.value);
  //   setSearchParams(searchParams);
  // }

  return (
    <select
      value={options[0].value}
      onChange={()=> handleSort}
      className="text-2xl py-3 px-5 border-2 border-solid dark:border-gray-600 dark:text-slate-300 bg-gray-100 dark:bg-gray-700 shadow-sm hover:cursor-pointer rounded-full"
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label || option.value}
        </option>
      ))}
    </select>

    // <Select onValueChange={handleSort} defaultValue={options[0].value}>
    //   <SelectTrigger
    //   className="border-2 border-solid border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 shadow-sm p-2 flex gap-2 rounded-full"
    //   //  className="text-2xl py-3 px-5 border-2 border-solid dark:border-gray-600 dark:text-slate-300 rounded-sm bg-gray-100 dark:bg-gray-700 shadow-sm hover:cursor-pointer rounded-full"
    //   >
    //     <SelectValue placeholder={options[0].value} />
    //   </SelectTrigger>

    //   <SelectContent>
    //     {options.map((option) => (
    //       <SelectItem
    //         key={option.label}
    //         value={option.value}
    //         className="text-2xl"
    //       >
    //         {option.label}
    //       </SelectItem>
    //     ))}
    //   </SelectContent>
    // </Select>
  );
}

export default SortBy;
