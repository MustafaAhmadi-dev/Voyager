import { useForm } from "react-hook-form";
import { useSignUp } from "./useAuth";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

type SignUpFormValues = {
  fullName: string;
  email: string;
  password: string;
  passwordConfirm?: string;
};
function SignUpForm() {
  const {
    handleSubmit,
    register,
    getValues,
    reset,
    formState: { errors },
  } = useForm<SignUpFormValues>();
  const { signUp, isSigningUp } = useSignUp();

  function onSubmit({
    fullName,
    email,
    password,
  }: {
    fullName: string;
    email: string;
    password: string;
  }) {
    signUp({ fullName, email, password });
    reset();
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          label="Full name"
          error={errors?.fullName?.message?.toString()}
        >
          <Input
            type="text"
            id="fullName"
            disabled={isSigningUp}
            {...register("fullName", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow
          label="Email address"
          error={errors?.email?.message?.toString()}
        >
          <Input
            type="email"
            id="email"
            disabled={isSigningUp}
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
          label="Password (min 8 characters)"
          error={errors?.password?.message?.toString()}
        >
          <Input
            type="password"
            id="password"
            disabled={isSigningUp}
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
          label="Repeat password"
          error={errors?.passwordConfirm?.message?.toString()}
        >
          <Input
            type="password"
            id="passwordConfirm"
            disabled={isSigningUp}
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
          />
        </FormRow>

        <div className="flex w-full">
          <Button
            disabled={isSigningUp}
            variant="secondary"
            onClick={() => reset}
            type="reset"
            className="mr-8 px-12"
          >
            Cancel
          </Button>
          <Button disabled={isSigningUp} className="ml-8 px-12">
            Create new user
          </Button>
        </div>
      </Form>
    </>
  );
}

export default SignUpForm;
