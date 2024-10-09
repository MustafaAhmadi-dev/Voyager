import { SubmitHandler, useForm } from "react-hook-form";
import { useUpdateData } from "./useAuth";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

interface UpdatePasswordFormInputs {
  password: string;
  passwordConfirm: string;
}

function UpdatePasswordForm() {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<UpdatePasswordFormInputs>();

  const { updateUser, isUpdating } = useUpdateData();

  const onSubmit: SubmitHandler<UpdatePasswordFormInputs> = ({ password }) => {
    updateUser({ password });
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="New password (min 8 chars)"
        error={errors?.password?.message?.toString()}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message?.toString()}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRow>

      <div className="flex w-full">
          <Button variant="secondary" onClick={() => reset} type="reset" className="mr-8 px-12">
            Cancel
          </Button>
          <Button disabled={isUpdating} className="ml-8 px-12">Update password</Button>
      </div>
    </Form>
  );
}

export default UpdatePasswordForm;
