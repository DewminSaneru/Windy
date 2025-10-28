'use client';
import Navbar from "@/components/Navbar";
import { useUser } from "@auth0/nextjs-auth0"

export default function Profile() {
  const { user, isLoading } = useUser();
  return (
    <main>
      <Navbar />
      <div className="text-center mt-10">
        <h1 className="text-3xl font-semibold text-blue-600">Profile</h1>
        <p className="mt-4 text-gray-600">Manage your Windy profile here.</p>
      </div>
      {isLoading && <p>Loading...</p>}
      {user && (
        <div style={{ textAlign: "center" }}>
          <img
            src={user.picture}
            alt="Profile"
            style={{ borderRadius: "50%", width: "80px", height: "80px" }}
          />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}
