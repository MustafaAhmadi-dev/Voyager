import { FieldValues, useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import LOCATION_DATA from "../../../data/LocationData";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import { Car, useCreateCars, useEditCars } from "./useCars";
import { useEffect } from "react";

type CreateCarFormProps = {
  onCloseModal?: () => void;
  carToEdit?: Partial<Car>;
};
function CreateCarForm({ onCloseModal, carToEdit = {} }: CreateCarFormProps) {
  const { createCar, isCreating } = useCreateCars();
  const { editCar, isEditting } = useEditCars();
  const isWorking = isCreating || isEditting;

  const { id: editId, ...editValues } = carToEdit;
  const isEditSession = Boolean(editId);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues: isEditSession ? editValues : {} });

  useEffect(() => {
    // Disable Scroll when this component is shown
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function onSubmit(data: FieldValues) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession) {
      if (editId !== undefined) {
        editCar(
          { newCar: { ...data, image }, id: editId },
          {
            onSuccess: () => {
              reset();
              onCloseModal?.();
            },
          }
        );
      }
    } else
      createCar(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  return (
    <Form
      variant={onCloseModal ? "modal" : "regular"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow label="Car name" error={errors?.name?.message?.toString()}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Number of Seats"
        error={errors?.num_seats?.message?.toString()}
      >
        <Input
          type="number"
          id="num_seats"
          disabled={isWorking}
          {...register("num_seats", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Number of Seats should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Regular price"
        error={errors?.regular_price?.message?.toString()}
      >
        <Input
          type="number"
          id="regular_price"
          disabled={isWorking}
          {...register("regular_price", {
            required: "This field is required",
            min: {
              value: 10,
              message: "The price should be at least 10",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Location of Car"
        error={errors?.location?.message?.toString()}
      >
        <select
          className="py-3 px-5 shadow-sm rounded-md border-2 border-solid border-gray-500 dark:bg-gray-600 dark:text-slate-200"
          {...register("location", { required: "This field is required!" })}
        >
          {LOCATION_DATA.map((location) => (
            <option key={location.id}>{location.name}</option>
          ))}
        </select>
      </FormRow>

      <FormRow
        label="Type of Car"
        error={errors?.car_type?.message?.toString()}
      >
        <Input
          type="text"
          id="car_type"
          placeholder="Medium Cars"
          disabled={isWorking}
          {...register("car_type", { required: "This field is required!" })}
        />
      </FormRow>

      <FormRow label="Mark of Car" error={errors?.mark?.message?.toString()}>
        <Input
          type="text"
          id="mark"
          disabled={isWorking}
          {...register("mark", { required: "This field is required!" })}
        />
      </FormRow>
      <FormRow label="Fuel of Car" error={errors?.fuel?.message?.toString()}>
        <Input
          type="text"
          id="fuel"
          placeholder="Diesel"
          disabled={isWorking}
          {...register("fuel", { required: "This field is required!" })}
        />
      </FormRow>
      <FormRow
        label="Transmission of Car"
        error={errors?.transmission?.message?.toString()}
      >
        <Input
          type="text"
          id="transmission"
          placeholder="Automatic"
          disabled={isWorking}
          {...register("transmission", { required: "This field is required!" })}
        />
      </FormRow>
      <FormRow
        label="the Production Year"
        error={errors?.year?.message?.toString()}
      >
        <Input
          type="text"
          id="year"
          disabled={isWorking}
          {...register("year", { required: "This field is required!" })}
        />
      </FormRow>

      <FormRow label="Car photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <>
          <Button
            variant="secondary"
            type="reset"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button disabled={isWorking}>
            {isEditSession ? "Edit car" : "Create new car"}
          </Button>
        </>
      </FormRow>
    </Form>
  );
}

export default CreateCarForm;
