import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createOrder as createOrderApi } from "../../services/apiBooking";

function useBooking() {
  const { mutate: createOrder, isPending } = useMutation({
    mutationFn: createOrderApi,
    onSuccess: () => {
      toast.success("Your order was successfully registered ");
    },
    onError: (err) => toast.error(err.message),
  });

  return { createOrder, isPending };
}

export default useBooking;
