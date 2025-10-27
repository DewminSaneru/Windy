import Navbar from "@/components/Navbar";

export default function Profile() {
  return (
    <main>
      <Navbar />
      <div className="text-center mt-10">
        <h1 className="text-3xl font-semibold text-blue-600">Profile</h1>
        <p className="mt-4 text-gray-600">Manage your Windy profile here.</p>
      </div>
    </main>
  );
}
