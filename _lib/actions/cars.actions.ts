"use server";

import { supabase } from "../supabase";
import { handleError } from "../utils";

export async function getAllCars() {
  const { data: cars, error } = await supabase.from("cars").select("*");
  // let query = supabase.from("cars").select("*");

  // if (sortBy)
  //   query = query.order(sortBy.field, {
  //     ascending: sortBy.direction === "asc",
  //   });

  // const { data: cars, error } = await query;

  if (error) {
    handleError(error, "cars could not be loaded");
  }

  return cars;
}
