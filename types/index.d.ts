/* eslint-disable no-unused-vars */

import { User } from "@supabase/supabase-js";

declare type FaqData = { question: string; answer: string };

declare type FaqItemProps = {
  data: FaqData;
  num: string;
  curOpen: string;
  setCurOpen: (num: string) => void;
};

declare type MobileNavbarProps = {
  isAuthenticated: boolean;
  open: boolean;
  openNav: () => void;
};
declare type DesktopNavbarProps = {
  user: User | null | undefined;
  isAuthenticated: boolean;
  isDarkMode: boolean;
  toggleColorMode: () => void;
};

declare type Car = {
  car_type: string;
  created_at: string;
  fuel: string;
  id: number;
  image: string;
  isAvailable: true;
  location: string;
  mark: string;
  name: string;
  num_seats: number;
  regular_price: number;
  transmission: string;
  year: number;
};

declare type InitialState = {
  car: Car;
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

declare type LocationData = {
  id: string;
  name: string;
};

declare type FormOptionProps = {
  labelTitle: string;
  id: string;
  defaultValue?: string;
  placeholder: string;
  Icon: IconType;
  register: UseFormRegister<FieldValues>;
  values: LocationData[];
};

declare type FormDateProps = {
  id: string;
  Icon: IconType;
  labelTitle: string;
  children: ReactNode;
};

declare type Customer = {
  id: number;
  fullName: string;
  phoneNumber: number;
  email: string;
  passportNumber: string;
  country: string;
};

declare type Booking = {
  created_at?: string;
  pickUpLocation: string;
  dropOffLocation: string;
  pickUpDate: string;
  dropOffDate: string;
  totalPrice: number;
  carId: number;
  customerId: number;
};

declare type CarInfoBoxProps = {
  header?: string;
  title: string;
  children: React.ReactNode;
};

declare type CarInfoProps = {
  pickUp: string;
  pickUpDate: string;
  dropOff: string;
  dropOffDate: string;
  car: Car;
};

declare type Option = {
  value: string;
  label: string;
};

declare type FilterProps = {
  options: Option[];
  field: string;
};

// declare type User = {
//   email: string;
//   id: string;
//   role: string;
//   user_metadata: {
//     avatar: string;
//     fullName: string;
//   };
// };
