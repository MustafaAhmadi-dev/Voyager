import supabase, { supabaseUrl } from "./supabase";

export async function getAllCars() {
  const { data, error } = await supabase.from("cars").select("*");

  if (error) {
    throw new Error("cars could not be loaded");
  }

  return data;
}

export async function createEditCar(
newCar: { image: File | string; [key: string]: unknown },id?: number
) {
  const hasImagePath =
    typeof newCar.image === "string" && newCar.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${
    (newCar.image as File).name
  }`.replaceAll("/", "");

  const imagePath = hasImagePath
    ? newCar.image
    : `${supabaseUrl}/storage/v1/object/public/cars/${imageName}`;

  // 1. Create/edit Car
  let query = supabase.from("cars");

  // A) CREATE
  if (!id) query = query.insert([{ ...newCar, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newCar, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Car could not be created");
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cars")
    .upload(imageName, newCar.image);

  // 3. Delete the car IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("cars").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Car image could not be uploaded and the car was not created"
    );
  }

  return data;
}

export async function deleteCar(id: number) {
  const { error } = await supabase.from("cars").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Car could not be deleted");
  }
}
