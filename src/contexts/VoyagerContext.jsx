import { createContext, useContext, useEffect, useReducer } from "react";
import { getCars } from "../services/apiCars";

const VoyagerContext = createContext();

const initialState = {
  // 'idle', 'submitting', 'isLoading , 'error', 'ready'
  status: "idle",
  cars: [],
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
    case "carsFetched":
      return { ...state, cars: action.payload, status: "ready" };
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
    case "carChosen":
      return { ...state, carType: action.payload };
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
      cars,
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
  useEffect(() => {
    getCars().then((data) => dispatch({ type: "carsFetched", payload: data }));
  }, []);
  return (
    <VoyagerContext.Provider
      value={{
        cars,
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
