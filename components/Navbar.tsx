"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `px-4 py-2 rounded-md transition-colors duration-200 ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-center gap-6">
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
    </nav>
  );
}
