import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ApiResponseData = Record<string, any> | null;

export class ApiResponse {
  constructor(
    public data: ApiResponseData = null,
    public isError: boolean = false,
    public errors: string[] = []
  ) {}
}

export class ErrorApiResponse extends ApiResponse {
  constructor(
    public errors: string[] = [],
    public isError: boolean = true,
    public data: ApiResponseData = null
  ) {
    super();
  }
}
