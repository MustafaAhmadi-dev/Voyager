import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createEditCar,
  deleteCar as deleteCarApi,
  getAllCars,
} from "../../services/apiCars";
import toast from "react-hot-toast";

export type Car = {
  car_type: string;
  created_at: string;
  fuel: string;
  id: number;
  image: string;
  isAvailable: true;
  location: string;
  mark: string;
  name: string;
  num_seats: number;
  regular_price: number;
  transmission: string;
  year: number;
};
export function useCars(): { cars: Car[] | undefined; isLoading: boolean } {
  const { data: cars, isLoading } = useQuery({
    queryKey: ["cars"],
    queryFn: getAllCars,
  });

  return { cars, isLoading };
}

export function useCreateCars() {
  const queryClient = useQueryClient();

  const { mutate: createCar, isPending: isCreating } = useMutation({
    mutationFn: createEditCar,

    onSuccess: () => {
      toast.success("Car succesfully created");
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { createCar, isCreating };
}

export function useEditCars() {
  const queryClient = useQueryClient();

  const { mutate: editCar, isPending: isEditting } = useMutation({
    mutationFn: ({
      newCar,
      id,
    }: {
      newCar: { image: File | string; [key: string]: unknown };
      id: number;
    }) => createEditCar(newCar, id),

    onSuccess: () => {
      toast.success("Car successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cars"] });
    },

    onError: (err) => toast.error(err.message),
  });

  return { editCar, isEditting };
}

export function useDeleteCar() {
  const queryClient = useQueryClient();

  const { mutate: deleteCar, isPending: isDeleting } = useMutation({
    mutationFn: deleteCarApi,

    onSuccess: () => {
      toast.success("Car successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { deleteCar, isDeleting };
}
