"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import { FiMenu, FiX, FiCloud } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();
  const { user, isLoading } = useUser();
  const [openMenu, setOpenMenu] = useState(false);

  const linkClasses = (path: string) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
      pathname === path
        ? "bg-blue-600 text-white shadow-sm"
        : "text-gray-700 hover:text-blue-600 hover:bg-blue-100"
    }`;

  return (
    <nav className="backdrop-blur-md bg-white/70 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-5 py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <FiCloud className="text-blue-600 text-2xl" />
          <span className="font-bold text-lg text-blue-700 tracking-wide">
            WINDY
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/dashboard" className={linkClasses("/dashboard")}>
            Dashboard
          </Link>
          <Link href="/profile" className={linkClasses("/profile")}>
            Profile
          </Link>

          {!isLoading && (
            <>
              {!user ? (
                <Link
                  href="/auth/login"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-sm transition"
                >
                  Login
                </Link>
              ) : (
                <Link
                  href="/auth/logout"
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 shadow-sm transition"
                >
                  Logout
                </Link>
              )}
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Slide Down  */}
      {openMenu && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-5 pb-5 flex flex-col gap-4">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/dashboard" className={linkClasses("/dashboard")}>
            Dashboard
          </Link>
          <Link href="/profile" className={linkClasses("/profile")}>
            Profile
          </Link>

          {!isLoading && (
            <>
              {!user ? (
                <Link
                  href="/auth/login"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow"
                >
                  Login
                </Link>
              ) : (
                <Link
                  href="/auth/logout"
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 shadow"
                >
                  Logout
                </Link>
              )}
            </>
          )}
        </div>
      )}
    </nav>
  );
}
