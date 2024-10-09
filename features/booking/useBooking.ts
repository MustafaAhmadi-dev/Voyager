import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBooking";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking = {},
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId as string),
    retry: false,
  });

  return { isLoading, error, booking };
}
