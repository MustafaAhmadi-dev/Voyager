import supabase from "./supabase";

export interface Customer {
  id: number;
  fullName: string;
  phoneNumber: number;
  email: string;
  passportNumber: string;
  country: string;
}

export async function createCustomer(newCustomer: Customer) {
  const { data, error } = await supabase
    .from("customers")
    .insert([{ ...newCustomer }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Customer's data could not be created");
  }

  return data;
}
