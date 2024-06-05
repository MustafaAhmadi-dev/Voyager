import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useVoyager } from "../contexts/VoyagerContext";
import { toast } from "react-toastify";

import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Button from "../ui/Button";

import { useBooking } from "../features/booking/useBooking";
import { useEffect } from "react";

function PersonalInfo({ onCloseModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createOrder, isLoading } = useBooking();
  const { dispatch, pickUp, dropOff, pickUpDate, dropOffDate, car } =
    useVoyager();
  const navigate = useNavigate();

  function handleClose() {
    onCloseModal?.();
  }

  useEffect(() => {
    // Disable Scroll when this component is shown
    document.body.style.overflow = "hidden";

    // Enable Scroll when this component is not being shown
    return () => (document.body.style.overflow = "auto");
  }, []);

  function onSubmit(data) {
    const newBooking = {
      departure_date: pickUpDate,
      return_date: dropOffDate,
      departure_location: pickUp,
      return_location: dropOff,
      carId: car.id,
    };

    dispatch({ type: "orderSubmitted", payload: data });
    createOrder(newBooking);
    navigate("/order/:orderId");
  }
  function onError(err) {
    toast.error(err.message);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="First name" error={errors?.firstName?.message}>
        <Input
          type="text"
          id="firstName"
          {...register("firstName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Last name" error={errors?.lastName?.message}>
        <Input
          type="text"
          id="lastName"
          {...register("lastName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Phone Number" error={errors?.phone?.message}>
        <Input
          type="tel"
          id="phone"
          {...register("phone", {
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

      <FormRow label="Age" error={errors?.age?.message}>
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

      <FormRow label="Email" error={errors?.email?.message}>
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

      <FormRow label="Address" error={errors?.address?.message}>
        <Input
          type="address"
          id="address"
          {...register("address", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="City" error={errors?.city?.message}>
        <Input
          type="text"
          id="city"
          {...register("city", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          Submit
        </Button>
      </FormRow>
    </Form>
  );
}

export default PersonalInfo;
