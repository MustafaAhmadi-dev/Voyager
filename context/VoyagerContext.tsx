import { createContext, ReactNode, useContext, useReducer } from "react";
import { type Car } from "../features/cars/useCars";

export type initialState = {
  car: Car ;
  error: string;
  pickUp: string;
  dropOff: string;
  pickUpDate: string;
  dropOffDate: string;
  firstName: string;
  lastName: string;
  nationality: string;
  phone: string;
  passportNumber: string;
  age: string;
  email: string;
};
const initialState: initialState = {
  car: {
    car_type: "",
    created_at: "",
    fuel: "",
    id: 0,
    image: "",
    isAvailable: true,
    location: "",
    mark: "",
    name: "",
    num_seats: 0,
    regular_price: 0,
    transmission: "",
    year: 0
  },
  error: "",
  pickUp: "",
  dropOff: "",
  pickUpDate: "",
  dropOffDate: "",
  firstName: "",
  lastName: "",
  nationality: "",
  phone: "",
  passportNumber: "",
  age: "",
  email: "",
};

type VoyagerContextValue = initialState & {
  submitRequest: (data: { [x: string]: string }) => void;
  submitOrder: (data: { [x: string]: string }) => void;
  chooseCar: (data: Car) => void;
};
const VoyagerContext = createContext({} as VoyagerContextValue);

type submitRequest = {
  type: "SUBMIT-REQUEST";
  payload: { [x: string]: string };
};
type submitOrder = {
  type: "SUBMIT-ORDER";
  payload: { [x: string]: string };
};
type chooseCar = {
  type: "CHOOSE-CAR";
  payload: Car;
};
type Action = submitRequest | submitOrder | chooseCar;

function reducer(state: initialState, action: Action): initialState {
  if (action.type === "SUBMIT-REQUEST") {
    return {
      ...state,
      pickUp: action.payload.pickUp,
      dropOff: action.payload.dropOff,
      pickUpDate: action.payload.pickUpDate,
      dropOffDate: action.payload.dropOffDate,
    };
  }

  if (action.type === "SUBMIT-ORDER") {
    return {
      ...state,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      phone: action.payload.phone,
      age: action.payload.age,
      email: action.payload.email,
    };
  }

  if (action.type === "CHOOSE-CAR") {
    return { ...state, car: action.payload };
  }

  return state;
}

export function VoyagerProvider({ children }: { children: ReactNode }) {
  const [voyagerState, dispatch] = useReducer(reducer, initialState);

  const ctx: VoyagerContextValue = {
    car: voyagerState.car,
    error: voyagerState.error,
    pickUp: voyagerState.pickUp,
    dropOff: voyagerState.dropOff,
    pickUpDate: voyagerState.pickUpDate,
    dropOffDate: voyagerState.dropOffDate,
    firstName: voyagerState.firstName,
    lastName: voyagerState.lastName,
    nationality: voyagerState.nationality,
    phone: voyagerState.phone,
    passportNumber: voyagerState.passportNumber,
    age: voyagerState.age,
    email: voyagerState.email,
    submitRequest(data) {
      dispatch({ type: "SUBMIT-REQUEST", payload: data });
    },
    submitOrder(data) {
      dispatch({ type: "SUBMIT-ORDER", payload: data });
    },
    chooseCar(data) {
      dispatch({ type: "CHOOSE-CAR", payload: data });
    },
  };

  return (
    <VoyagerContext.Provider value={ctx}>{children}</VoyagerContext.Provider>
  );
}

export function useVoyager() {
  const context = useContext(VoyagerContext);

  if (context === undefined)
    throw new Error("VoyagerContext was used outside of the VoyagerProvider");

  return context;
}
