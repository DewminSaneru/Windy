import type { NextRequest } from "next/server";
import { auth0 } from "./lib/auth0";

export default async function middleware(request: NextRequest) {
  return await auth0.middleware(request);
}

export const config = {
  matcher: [
    // Match all paths except static files and metadata
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
