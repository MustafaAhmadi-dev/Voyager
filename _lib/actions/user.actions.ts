"use server";

import { cache } from "react";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { supabase } from "@/_lib/supabase";
import { handleError } from "../utils";
import { Customer } from "@/types";

export const getCurrentUser = cache(async () => {
  const { data: session, error: autherror } = await supabase.auth.getSession();
  if (autherror) handleError(autherror, "no session");
  if (!session.session) return null;
  console.log("session", session);
  const { data, error } = await supabase.auth.getUser();

  if (error) handleError(error, "Failed to get the current User!!!");

  return data.user;
});

export async function logIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return { message: error ? "Invalid Email or Password" : "" };

  revalidatePath("/");
  return { data, message: error ? "Invalid Email or Password" : "" };
}

export async function logOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
  revalidatePath("/");
  redirect("/");
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