import supabase from "./supabase";

export async function getCars() {
  const { data, error } = await supabase.from("cars").select("*");

  if (error) {
    throw new Error("cars could not be loaded");
  }

  return data;
}
