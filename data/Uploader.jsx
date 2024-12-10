'use client'

import { useState } from "react";
import supabase from "../Voyager/src/services/supabase";
import { cars } from "./CarsData";

async function deleteCars() {
  const { error } = await supabase.from("cars").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function createCars() {
  const { error } = await supabase.from("cars").insert(cars);
  if (error) console.log(error.message);
}

export function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);
    await deleteCars();
    await createCars();
    setIsLoading(false);
    console.log("sending...");
  }

  return (
    <div
      style={{
        marginTop: "auto",
        backgroundColor: "#e0e7ff",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      <h3>DEV AREA</h3>
      <button disabled={isLoading} onClick={() => uploadAll()}>
        Upload All sample Data ...
      </button>
      <p>Run this Only once!</p>
      <p>
        <em>(Car images need to be uploaded manually)</em>
      </p>
    </div>
  );
}
