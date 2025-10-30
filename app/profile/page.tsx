'use client';

import Navbar from "@/components/Navbar";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfilePage() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {user ? (
          <div className="max-w-4xl mx-auto">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Profile Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8 sm:px-8">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative">
                    <img
                      src={user.picture || "/default-avatar.png"}
                      alt="Profile"
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-lg"
                    />
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {user.name || "Unknown User"}
                    </h2>
                    <p className="text-blue-100 text-lg">{user.email}</p>
                  </div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Personal Information
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          Name
                        </label>
                        <p className="text-gray-900 font-medium">{user.nickname}</p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          Email Address
                        </label>
                        <p className="text-gray-900 font-medium">{user.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Raw Data Section - Collapsible */}
            <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Raw User Data
                  </h3>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 border-t border-gray-200">
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {JSON.stringify(user, null, 2)}
                  </pre>
                </div>
              </details>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto text-center py-12">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                No User Data
              </h3>
              <p className="text-gray-600 mb-6">
                Please log in to view your profile information.
              </p>
              <a
                href="/auth/login"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Sign In
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}