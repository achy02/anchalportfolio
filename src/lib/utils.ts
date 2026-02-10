import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
<<<<<<< HEAD
    return twMerge(clsx(inputs))
=======
  return twMerge(clsx(inputs))
>>>>>>> ab6f1490c100e2d66a6a52e178964cb5952be9de
}
