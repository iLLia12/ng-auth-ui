import type { NextRequest } from "next/server";
import { updateSession } from "./app/lib";

export function middleware(request: NextRequest) {
  // console.log("UPDATE SESSION MIDDLEWARE");
  // updateSession(request);
}
