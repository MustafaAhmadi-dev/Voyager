import { useForm } from "react-hook-form";
import { useVoyager } from "../contexts/VoyagerContext";
import { toast } from "react-toastify";
import styled, { css } from "styled-components";

const StyeldDiv = styled.div`
  padding: 3rem 3rem;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 1.8rem;
    text-transform: uppercase;
    color: var(--color-orange-100);
    margin-bottom: 2rem;
  }
`;

const StyeldForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const cols = {
  single: css`
    grid-template-columns: 1fr !important;
  `,
};
const StyledBox = styled.div`
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 1rem 0;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }

  span {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    label {
      font-size: 1.6rem;
      font-weight: 500;
      color: var(--color-grey-900);

      b {
        color: var(--color-orange-100);
      }
    }

    input {
      padding: 14px 15px;
      background-color: var(--color-grey-100);
      color: var(--color-grey-900);
      font-size: 1.5rem;
      font-weight: 500;
      outline: none;
      border: none;
    }
  }
  ${(props) => cols[props.col]}
`;

const StyledButton = styled.div`
  background-color: var(--color-grey-50);
  margin: 0 -3rem;
  padding: 3rem;
  text-align: right;

  @media (max-width: 650px) {
    text-align: center;
  }

  button {
    font-size: 2.4rem;
    color: var(--color-white);
    font-weight: 700;
    background-color: var(--color-orange-200);
    border: var(--border-light);
    padding: 1.2rem 2rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: var(--color-orange-800);
    }
  }
`;
function PersonalInfo() {
  const { register, handleSubmit } = useForm();
  const { dispatch } = useVoyager();

  function onSubmit(data) {
    console.log(data);
    dispatch({ type: "orderSubmitted", payload: data });
    toast.success("Order has been successfully registered");
  }
  function onError() {
    toast.error("Please fill in all the fields");
  }

  return (
    <div>
      <StyeldDiv>
        <h4>Personal Information</h4>
        <StyeldForm onSubmit={handleSubmit(onSubmit, onError)}>
          <StyledBox>
            <FormField
              label="First Name"
              name="firstName"
              register={register}
              type="text"
              placeholder="Enter your first name"
            />

            <FormField
              label="Last Name"
              name="lastName"
              register={register}
              type="text"
              placeholder="Enter your last name"
            />

            <FormField
              label="Phone"
              name="phone"
              register={register}
              type="tel"
              placeholder="Enter your phone number"
            />

            <FormField
              label="Age"
              name="age"
              register={register}
              type="number"
              placeholder="18"
            />
          </StyledBox>

          <StyledBox col="single">
            <FormField
              label="Email"
              name="email"
              register={register}
              type="email"
              placeholder="Enter your email address"
            />

            <FormField
              label="Address"
              name="address"
              register={register}
              type="text"
              placeholder="Enter your street address"
            />
          </StyledBox>

          <StyledBox>
            <FormField
              label="City"
              name="city"
              register={register}
              type="text"
              placeholder="Enter your city"
            />

            <FormField
              label="Zip Code"
              name="zipCode"
              register={register}
              type="text"
              placeholder="Enter your Zip Code"
            />
          </StyledBox>

          <StyledButton>
            <button>Reserve Now</button>
          </StyledButton>
        </StyeldForm>
      </StyeldDiv>
    </div>
  );
}

function FormField({ label, name, register, type, placeholder }) {
  return (
    <span>
      <label>
        {label} <b>*</b>
      </label>
      <input
        name={name}
        {...register(name)}
        type={type}
        placeholder={placeholder}
        required
      ></input>
    </span>
  );
}

export default PersonalInfo;
