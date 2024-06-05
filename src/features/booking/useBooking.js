import { useMutation } from "@tanstack/react-query";
import { createOrder as createOrderApi } from "../../services/apiBookings";
import { toast } from "react-toastify";

export function useBooking() {
  const { mutate: createOrder, isPending: isLoading } = useMutation({
    mutationFn: createOrderApi,
    onSuccess: () => {
      toast.success("Your order was successfully registered ");
    },
    onError: (err) => toast.error(err.message),
  });

  return { createOrder, isLoading };
}
