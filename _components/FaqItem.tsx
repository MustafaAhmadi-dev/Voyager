import { FaqItemProps } from "@/types";
import { FaCaretDown } from "react-icons/fa6";

export default function FaqItem({
  data,
  num,
  curOpen,
  setCurOpen,
}: FaqItemProps) {
  const isOpen = curOpen === num;

  function handleToggle() {
    setCurOpen(isOpen ? "" : num);
  }
  return (
    <div className="flex flex-col text-gray-900 dark:text-slate-100 bg-white dark:bg-gray-700 w-full md:w-[80rem] shadow-sm cursor-pointer">
      <div
        className={`flex items-center justify-between shadow-sm py-7 px-16 transition ease delay-150 hover:bg-orange ${
          isOpen ? "bg-orange-dark text-white shadow-md" : ""
        }`}
        onClick={() => handleToggle()}
      >
        <p className="dark:text-slate-200">
          {num} {data.question}
        </p>
        <FaCaretDown />
      </div>

      <div
        className={`text-2xl bg-gray-600 text-gray-700 dark:text-slate-200 py-0 px-16 transition ease delay-150 max-h-0 overflow-hidden ${
          isOpen
            ? "max-h-[55rem] md:max-h-[30rem] lg:max-h-80 py-12 px-16 leading-10"
            : ""
        }`}
      >
        {isOpen && data.answer}
      </div>
    </div>
  );
}
