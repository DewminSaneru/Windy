import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
       <Navbar />
      <div className="text-center mt-10">
        <h1 className="text-3xl font-semibold text-blue-600">Home</h1>
        <p className="mt-4 text-gray-600">This is your home page.</p>
      </div>
    </main>
   )
}
