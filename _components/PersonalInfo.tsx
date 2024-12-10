"use client";

import { useEffect, useMemo } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { differenceInDays } from "date-fns";
import countryList from "react-select-country-list";
import toast from "react-hot-toast";

import Form from "./ui/Form";
import Input from "./ui/Input";
import Button from "./ui/Button";
import FormRow from "./ui/FormRow";
import { useVoyager } from "@/app/voyagerContext";
import { useRouter } from "next/navigation";
import { createCustomer } from "@/_lib/actions/user.actions";
import { Booking, Customer } from "@/types";
import { createOrder } from "@/_lib/actions/booking.actions";
import { useFormStatus } from "react-dom";

type PersonalInfoProps = {
  onCloseModal?: () => void;
};
function PersonalInfo({ onCloseModal }: PersonalInfoProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const router = useRouter();
  const { submitOrder, car, dropOffDate, pickUpDate, pickUp, dropOff } =
    useVoyager();
  const { pending } = useFormStatus();

  const options = useMemo(() => countryList().getData(), []);
  const daysRide = differenceInDays(
    Date.parse(String(dropOffDate)),
    Date.parse(String(pickUpDate))
  );
  const id = Date.now();

  useEffect(() => {
    // Disable Scroll when this component is shown
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  async function createNewOrder({
    newCustomer,
    newBooking,
  }: {
    newCustomer: Customer;
    newBooking: Booking;
  }) {
    await createCustomer(newCustomer);
    await createOrder(newBooking);
  }

  const onSubmit = async (data: FieldValues) => {
    const newCustomer = {
      id: id,
      fullName: data.firstName + "  " + data.lastName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      passportNumber: data.passportNumber,
      country: data.nationality,
    };

    const totalPrice = Number(car.regular_price * daysRide);

    const newBooking = {
      pickUpLocation: pickUp,
      dropOffLocation: dropOff,
      pickUpDate,
      dropOffDate,
      totalPrice,
      carId: car.id,
      customerId: id,
    };
    createNewOrder({ newCustomer, newBooking });
    console.log(data, newCustomer);

    router.push("/thank-you");
    submitOrder(data);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = (err: any) => {
    const firstObject = err[Object.keys(err)[0]];
    toast.error(firstObject.message);
  };

  function handleClose() {
    onCloseModal?.();
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      variant={onCloseModal ? "modal" : "regular"}
    >
      <FormRow
        label="First name"
        error={errors?.firstName?.message?.toString()}
      >
        <Input
          id="firstName"
          {...register("firstName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Last name" error={errors?.lastName?.message?.toString()}>
        <Input
          id="lastName"
          {...register("lastName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Phone Number" error={errors?.phone?.message?.toString()}>
        <Input
          type="tel"
          id="phoneNumber"
          {...register("phoneNumber", {
            required: "This field is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Please provide a valid phone number",
            },
            minLength: {
              value: 5,
              message:
                "Please provide a valid phone number (At least 5 numbers)",
            },
          })}
        />
      </FormRow>

      <FormRow label="Age" error={errors?.age?.message?.toString()}>
        <Input
          type="number"
          id="age"
          {...register("age", {
            required: "This field is required",
            min: {
              value: 18,
              message: "You must be at least 18 to request a car",
            },
          })}
        />
      </FormRow>

      <FormRow label="Email" error={errors?.email?.message?.toString()}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Passport Number"
        error={errors?.passportNumber?.message?.toString()}
      >
        <Input
          type="text"
          id="passportNumber"
          {...register("passportNumber", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Nationality"
        error={errors?.nationality?.message?.toString()}
      >
        <select
          className="text-2xl w-96 sm:w-[30rem] py-3 px-0 sm:px-5 border-2 border-solid border-gray-300 text-gray-700 dark:text-slate-200 bg-gray-100 dark:bg-gray-600 rounded-sm font-semibold shadow-sm"
          {...register("nationality", { required: "This field is required" })}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </FormRow>

      <div className="flex justify-end items-center w-full pt-3 gap-6">
        <Button
          variant="secondary"
          size="large"
          type="reset"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button type="submit" size="large" disabled={pending}>
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default PersonalInfo;
