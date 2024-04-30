import { createContext, useContext, useReducer } from "react";

const VoyagerContext = createContext();

const initialState = {
  // 'idle', 'submitting', 'error', 'ready'
  status: "idle",
  isLoading: false,
  error: "",
  carType: "",
  pickUp: "",
  dropOff: "",
  pickUpDate: "",
  dropOffDate: "",
  firstName: "",
  lastName: "",
  phone: "",
  age: "",
  email: "",
  address: "",
  city: "",
  zipCode: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "modalClosed":
      return { ...state, status: "idle" };
    case "requestSubmitted":
      return {
        ...state,
        status: "submitting",
        carType: action.payload.carType,
        pickUp: action.payload.pickUp,
        dropOff: action.payload.dropOff,
        pickUpDate: action.payload.pickUpDate,
        dropOffDate: action.payload.dropOffDate,
      };
    case "orderSubmitted":
      return {
        ...state,
        status: "idle",
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phone: action.payload.phone,
        age: action.payload.age,
        email: action.payload.email,
        address: action.payload.address,
        city: action.payload.city,
        zipCode: action.payload.zipCode,
      };
      case 'carChosen':
        return { ...state, carType: action.payload}
    case "failed":
      return { ...state, status: "error", error: action.payload };

    default:
      throw new Error("Action unkonwn");
  }
}

function VoyagerProvider({ children }) {
  const [
    {
      status,
      error,
      carType,
      pickUp,
      dropOff,
      pickUpDate,
      dropOffDate,
      firstName,
      lastName,
      phone,
      age,
      email,
      address,
      city,
      zipCode,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <VoyagerContext.Provider
      value={{
        status,
        error,
        carType,
        pickUp,
        dropOff,
        pickUpDate,
        dropOffDate,
        firstName,
        lastName,
        phone,
        age,
        email,
        address,
        city,
        zipCode,
        dispatch,
      }}
    >
      {children}
    </VoyagerContext.Provider>
  );
}

function useVoyager() {
  const context = useContext(VoyagerContext);

  if (context === undefined)
    throw new Error("VoyagerContext was used outside of the VoyagerProvider");

  return context;
}

export { VoyagerProvider, useVoyager };

