import { useMutation } from "@tanstack/react-query";
import { createCustomer as createCustomerApi } from "../services/apiCustomers";

function useCustomer() {
  const { mutate: createCustomer, isPending } = useMutation({
    mutationFn: createCustomerApi,
  });
  return { createCustomer, isPending };
}

export default useCustomer;
