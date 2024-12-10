import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...inputs:ClassValue[]){
    return twMerge(clsx(inputs))
}

export function handleError(error: unknown, message: string) {
    console.log(error, message);
    throw error;
  }
  