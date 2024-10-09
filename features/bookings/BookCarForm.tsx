import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  Controller,
  FieldValues,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import DatePicker from "react-datepicker";
import { IconType } from "react-icons";
import { GiPositionMarker } from "react-icons/gi";
import { RiMapPin2Fill } from "react-icons/ri";
import { IoCalendarNumberSharp } from "react-icons/io5";
import LOCATION_DATA, { type LocationData } from "../../../data/LocationData";
import { useVoyager } from "../../context/VoyagerContext";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import PersonalInfo from "./PersonalInfo";

function BookCarForm({ modal = false }: { modal?: boolean }) {
  const { submitRequest } = useVoyager();
  const { register, handleSubmit, control, watch } = useForm();
  const pickUpDate = watch("pickUpDate"); // Watch for changes in pickUpDate since i set the defaultValue of dropOffDate
  const navigate = useNavigate();

  const locations = LOCATION_DATA;

  function onSubmit(data: FieldValues) {
    submitRequest(data);
    if (modal) {
      return;
    } else {
      navigate("/cars");
    }
  }

  return (
    <form
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 grid-rows-[auto] text-red-500 ${
        modal ? "w-max" : ""
      }`}
      onSubmit={handleSubmit(onSubmit)}
    >
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
            <DatePicker
              className="text-2xl text-black border-2 border-solid border-slate-300 rounded py-8 px-16 outline-none"
              required
              placeholderText="Please choose pick up date"
              onChange={(date) => field.onChange(date?.toLocaleDateString())}
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
            <DatePicker
              className="text-2xl text-black border-2 border-solid border-slate-300 rounded py-8 px-16 outline-none"
              required
              placeholderText="Please choose drop off date"
              onChange={(date) => field.onChange(date?.toLocaleDateString())}
              selected={field.value}
              minDate={pickUpDate}
              disabled={!pickUpDate}
            />
          )}
        />
      </FormDate>

      {modal ? (
        <Modal>
          <Modal.Open opens="personalInfo">
            <Button
              variant="theme"
              size="large"
              type="submit"
              className="h-fit self-end"
            >
              Next
            </Button>
          </Modal.Open>
          <Modal.Window name="personalInfo">
            <PersonalInfo />
          </Modal.Window>
        </Modal>
      ) : (
        <Button
          variant="theme"
          size="large"
          type="submit"
          className="h-fit self-end bg-rose-600 sm:bg-orange"
        >
          Search
        </Button>
      )}
    </form>
  );
}

export default BookCarForm;

type FormOptionProps = {
  labelTitle: string;
  id: string;
  defaultValue?: string;
  placeholder: string;
  Icon: IconType;
  register: UseFormRegister<FieldValues>;
  values: LocationData[];
};
function FormOption({
  labelTitle,
  id,
  defaultValue,
  placeholder,
  Icon,
  register,
  values,
}: FormOptionProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="text-2xl font-semibold mb-5">
        <Icon style={{ color: "var(--color-orange-400)" }} /> {labelTitle}
      </label>

      <select
        required
        defaultValue={defaultValue || ""}
        id={id}
        {...register(id, {
          required: "This field is required",
        })}
        className="text-2xl text-gray-800 border-2 border-solid border-slate-300 rounded font-semibold py-4 px-5 outline-none"
      >
        <option value="" hidden></option>
        <option disabled>{placeholder}</option>
        {values.map((value) => (
          <option key={value.id} value={value.name}>
            {value.name}
          </option>
        ))}
      </select>
    </div>
  );
}

type FormDateProps = {
  id: string;
  Icon: IconType;
  labelTitle: string;
  children: ReactNode;
};
function FormDate({ id, Icon, labelTitle, children }: FormDateProps) {
  return (
    <div className="flex flex-col relative">
      <label className="text-2xl font-semibold mb-5" htmlFor={id}>
        <Icon style={{ color: "var(--color-orange-400)" }} /> {labelTitle}
      </label>
      {children}
    </div>
  );
}
