import { useState } from "react";

function PersonalInfo({ toggleModal }) {
  const [inputs, setInputs] = useState({});
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [age, setAge] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [zipcode, setZipCode] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    toggleModal();
  }

  return (
    <div>
      <div className="booking-modal__person-info">
        <h4>Personal Information</h4>
        <form className="info-form" onSubmit={handleSubmit}>
          <div className="info-form__2col">
            <FormField
              label="First Name"
              name="firstName"
              value={inputs.firstName}
              onChange={handleChange}
              type="text"
              placeholder="Enter your first name"
            />

            <FormField
              label="Last Name"
              name="lastName"
              value={inputs.lastName}
              onChange={handleChange}
              type="text"
              placeholder="Enter your last name"
            />

            <FormField
              label="Phone"
              name="phone"
              value={inputs.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Enter your phone number"
            />

            <FormField
              label="Age"
              name="age"
              value={inputs.age}
              onChange={handleChange}
              type="number"
              placeholder="18"
            />
          </div>

          <div className="info-form__1col">
            <FormField
              label="Email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email address"
            />

            <FormField
              label="Address"
              name="address"
              value={inputs.address}
              onChange={handleChange}
              type="text"
              placeholder="Enter your street address"
            />
          </div>

          <div className="info-form__2col">
            <FormField
              label="City"
              name="city"
              value={inputs.city}
              onChange={handleChange}
              type="text"
              placeholder="Enter your city"
            />

            <FormField
              label="Zip Code"
              name="zipCode"
              value={inputs.zipCode}
              onChange={handleChange}
              type="text"
              placeholder="Enter your Zip Code"
            />
          </div>

          <span className="info-form__checkbox">
            <input type="checkbox"></input>
            <p>Please send me latest news and updates</p>
          </span>

          <div className="reserve-button">
            <button>Reserve Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormField({ label, name, value, onChange, type, placeholder }) {
  return (
    <span>
      <label>
        {label} <b>*</b>
      </label>
      <input
        name={name}
        value={value || ""}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required
      ></input>
    </span>
  );
}

export default PersonalInfo;
