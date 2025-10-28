"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client"; //Import Auth0 client hook

export default function Navbar() {
  const pathname = usePathname();
  const { user, isLoading } = useUser(); //Get user state

  const linkClasses = (path: string) =>
    `px-4 py-2 rounded-md transition-colors duration-200 ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Left side - Navigation links */}
        <div className="flex gap-6">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/dashboard" className={linkClasses("/dashboard")}>
            Dashboard
          </Link>
          <Link href="/profile" className={linkClasses("/profile")}>
            Profile
          </Link>
        </div>

        {/* Login/Logout button */}
        <div>
          {!isLoading && (
            <>
              {!user ? (
                <Link
                  href="/auth/login"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Login
                </Link>
              ) : (
                <Link
                  href="/auth/logout"
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                >
                  Logout
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
