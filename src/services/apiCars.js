import supabase from "./supabase";

export async function getAllCars() {
  const { data, error } = await supabase.from("cars").select("*");

  if (error) {
    throw new Error("cars could not be loaded");
  }

  return data;
}

export async function getCars(location) {
  let { data: cars, error } = await supabase
    .from("cars")
    .select("*")
    .eq("location", location);

  if (error) {
    throw new Error("cars could not be loaded");
  }

  return cars;
}
