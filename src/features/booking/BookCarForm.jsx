import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import DatePicker from "react-datepicker";

import { IoCalendarNumberSharp } from "react-icons/io5";
import { GiPositionMarker } from "react-icons/gi";
import { RiMapPin2Fill } from "react-icons/ri";

import Button from "../../ui/Button";

import LOCATION_DATA from "../../../data/LocationData";
import { useVoyager } from "../../contexts/VoyagerContext";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  font-size: 1.5rem;
  color: #ababab;
  font-family: var(--color-grey-900);
  border: 1px solid #ccd7e6;
  border-radius: 3px;
  font-weight: 400;
  padding: 2rem 4rem;
  outline: none;
`;

const StyledButton = styled(Button)`
  height: fit-content;
  align-self: self-end;
`;

function BookCarForm() {
  const { dispatch } = useVoyager();
  const navigate = useNavigate();

  const { control, register, handleSubmit, watch } = useForm();
  const pickUpDate = watch("pickUpDate"); // Watch for changes in pickUpDate since i set the defaultValue of dropOffDate 

  const locations = LOCATION_DATA;

  function onSubmit(data) {
    dispatch({ type: "requestSubmitted", payload: data });
    navigate("/cars");
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormOption
        Icon={GiPositionMarker}
        labelTitle="&nbsp; Pick-up"
        id="pickUp"
        register={register}
        placeholder="Please choose a Pick Up Location"
        values={locations}
      />

      <FormOption
        Icon={RiMapPin2Fill}
        labelTitle="&nbsp; Drop-off"
        id="dropOff"
        register={register}
        placeholder="Please choose a Drop Off Location"
        values={locations}
      />

      <FormDate
        id="pickUpDate"
        Icon={IoCalendarNumberSharp}
        labelTitle="&nbsp; Pick-up Date"
      >
        <Controller
          control={control}
          name="pickUpDate"
          rules={{ required: true }}
          render={({ field }) => (
            <StyledDatePicker
              required
              placeholderText="Please choose pick up date"
              onChange={(date) => field.onChange(date.toLocaleDateString())}
              selected={field.value}
              minDate={new Date()}
            />
          )}
        />
      </FormDate>

      <FormDate
        id="dropOffDate"
        Icon={IoCalendarNumberSharp}
        labelTitle="&nbsp; Drop-off Date"
      >
        <Controller
          control={control}
          name="dropOffDate"
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <StyledDatePicker
              required
              placeholderText="Please choose drop off date"
              onChange={(date) => field.onChange(date.toLocaleDateString())}
              selected={field.value}
              minDate={pickUpDate}
              disabled={!pickUpDate}
            />
          )}
        />
      </FormDate>

      <StyledButton variation="theme" size="large" type="submit">
        Search
      </StyledButton>
    </StyledForm>
  );
}

const StyledOption = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1.2rem;

    i {
      color: var(--color-orange-50);
    }
  }

  select {
    font-size: 1.5rem;
    color: var(--color-grey-800);
    font-family: var(--color-grey-900);
    border: 1px solid #ccd7e6;
    border-radius: 3px;
    font-weight: 400;
    padding: 1.2rem 1.3rem;
    outline: none;
  }
`;

function FormOption({
  Icon,
  labelTitle,
  id,
  register,
  placeholder,
  defaultValue,
  values,
}) {
  return (
    <StyledOption>
      <label>
        <Icon style={{ color: "var(--color-orange-400)" }} /> {labelTitle}
      </label>

      <select
        required
        defaultValue={defaultValue || ""}
        id={id}
        {...register(id, {
          required: "This field is required",
        })}
      >
        <option value="" hidden></option>
        <option disabled value>
          {placeholder}
        </option>
        {values.map((value) => (
          <option key={value.id} value={value.name}>
            {value.name}
          </option>
        ))}
      </select>
    </StyledOption>
  );
}

const StyledDate = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
  }
`;

function FormDate({ id, Icon, labelTitle, children }) {
  return (
    <StyledDate>
      <label htmlFor={id}>
        <Icon style={{ color: "var(--color-orange-400)" }} /> {labelTitle}
      </label>
      {children}
    </StyledDate>
  );
}

export default BookCarForm;
