import {
  IconCalendarEvent,
  IconCar,
  IconMapPinFilled,
} from "@tabler/icons-react";

function BookCarForm({ cars, toggleModal, order, handleOrder }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleModal();
  };
  return (
    <form className="box-form" onSubmit={handleSubmit}>
      <FormOptions
        Icon={IconCar}
        labelTitle="&nbsp; Select Your Car Type"
        name="carType"
        value={order.carType}
        onChange={handleOrder}
        title="Select your car type"
        optionValues={cars.map((car) => car.name)}
      />

      <FormOptions
        Icon={IconMapPinFilled}
        labelTitle="&nbsp; Pick-up"
        name="pickUp"
        value={order.pickUp}
        onChange={handleOrder}
        title="Select pick up location"
        optionValues={["Belgrade", "Novi Sad", "Nis", "Kragujevac", "Subotica"]}
      />

      <FormOptions
        Icon={IconMapPinFilled}
        labelTitle="&nbsp; Drop-off"
        name="dropOff"
        value={order.dropOff}
        onChange={handleOrder}
        title="Select drop off location"
        optionValues={["Belgrade", "Novi Sad", "Nis", "Kragujevac", "Subotica"]}
      />

      <FormDate
        id="pickTime"
        Icon={IconCalendarEvent}
        labelTitle="&nbsp; Pick-up"
        name="pickTime"
        value={order.pickTime}
        onChange={handleOrder}
      />

      <FormDate
        id="droptime"
        Icon={IconCalendarEvent}
        labelTitle="&nbsp; Drop-of"
        name="dropTime"
        value={order.dropTime}
        onChange={handleOrder}
      />

      <button type="submit">Search</button>
    </form>
  );
}

function FormOptions({
  Icon,
  labelTitle,
  children,
  value,
  onChange,
  title,
  optionValues,
  name,
}) {
  return (
    <div className="box-form__car-type">
      <label>
        <Icon className="input-icon" /> {labelTitle} <b>*</b>
      </label>
      <select name={name} value={value} onChange={onChange}>
        <option disabled>{title}</option>
        {children}
        {optionValues.map((optionValue) => (
          <option value={optionValue} key={optionValue}>
            {optionValue}
          </option>
        ))}
      </select>
    </div>
  );
}

function FormDate({ id, name, Icon, labelTitle, value, onChange }) {
  return (
    <div className="box-form__car-time">
      <label htmlFor={id}>
        <Icon className="input-icon" /> {labelTitle} <b>*</b>
      </label>
      <input
        required
        id={id}
        name={name}
        value={value || ""}
        onChange={onChange}
        type="date"
      ></input>
    </div>
  );
}

export default BookCarForm;
