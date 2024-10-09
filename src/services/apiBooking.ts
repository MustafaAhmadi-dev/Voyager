import { PAGE_SIZE } from "../features/bookings/useBookings";
import supabase from "./supabase";

export interface Booking {
  created_at?: string
  pickUpLocation: string;
  dropOffLocation: string;
  pickUpDate: string;
  dropOffDate: string;
  totalPrice: number;
  carId: number;
  customerId: number;
}

export async function getAllBookings({
  sortBy,
  page,
}: {
  sortBy: {
    field: string;
    direction: string;
  };
  page: number;
}) {
  let query = supabase
    .from("bookings")
    .select("*,cars(name),customers(fullName, email)", { count: "exact" });

  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be fetched");
  }

  return { data, count };
}

export async function getBooking(id: string) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cars(*), customers(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}

export async function deleteBooking(id: number) {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  return data;
}

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
