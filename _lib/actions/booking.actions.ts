"use server";

import { Booking } from "@/types";
import { supabase } from "../supabase";

export async function createOrder(newBooking: Booking) {
  const { data, error } = await supabase
    .from("bookings")
    .insert([{ ...newBooking }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Order could not be registered");
  }

  return data;
}
