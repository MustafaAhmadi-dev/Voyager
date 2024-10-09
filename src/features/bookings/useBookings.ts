import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllBookings as getAllBookingsApi } from "../../services/apiBooking";

export const PAGE_SIZE = 10;

function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "pickUpDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", sortBy, page],
    queryFn: () => getAllBookingsApi({ sortBy, page }),
  });

  const pageCount = Math.ceil((count || 1) / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", sortBy, page + 1],
      queryFn: () => getAllBookingsApi({ sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", sortBy, page - 1],
      queryFn: () => getAllBookingsApi({ sortBy, page: page - 1 }),
    });

  return { bookings, isLoading, error, count };
}

export default useBookings;
