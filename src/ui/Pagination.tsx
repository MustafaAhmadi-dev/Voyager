import { useSearchParams } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { PAGE_SIZE } from "../features/bookings/useBookings";

function Pagination({ count }: { count: number }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next.toString());
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev.toString());
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-2xl ml-3 dark:text-slate-100">
        Showing{" "}
        <span className="font-[600]">{(currentPage - 1) * PAGE_SIZE + 1}</span>{" "}
        to{" "}
        <span className="font-[600]">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span className="font-[600]">{count}</span> results
      </p>

      <div className="flex gap-2">
        <button
          className={`flex items-center justify-center gap-2 transition-all py-2 px-5 text-2xl font-[500] rounded-sm border-none ${
            currentPage === 1 ? "bg-gray-100 dark:bg-gray-500" : "bg-sky-800 text-sky-200 dark:text-slate-300"
          }`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <HiChevronLeft className="h-7 w-7" />{" "}
          <span className="pr-2">Previous</span>
        </button>

        <button
          className={`flex items-center justify-center gap-2 transition-all py-2 px-5 text-2xl font-[500] rounded-sm border-none ${
            currentPage === pageCount
              ? "bg-gray-100"
              : "bg-sky-800 text-sky-200"
          }`}
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span className="pl-2">Next</span>
          <HiChevronRight className="h-7 w-7" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
