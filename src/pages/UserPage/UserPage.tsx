import { Link } from "react-router-dom";
import useById from "./useById";

export default function UserPage() {
  const { user, message } = useById();

  if (message) {
    return (
      <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-red-900 mb-3">User Not Found</h2>
        <p className="text-red-800 mb-6">{message}</p>
        <Link
          to="/app-route"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
        >
          ← Back to Users
        </Link>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-12">
        <h1 className="text-5xl font-bold mb-4">👤 User Profile</h1>
        <p className="text-lg opacity-90">View complete user information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Profile Card */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32"></div>
            <div className="relative px-8 pb-8">
              <div className="flex flex-col items-center -mt-16 mb-6">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white text-4xl">
                    👤
                  </div>
                )}
              </div>

              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">{user.name}</h2>
                <p className="text-lg text-gray-600 font-semibold">
                  {user.role || "User"}
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
                  <p className="text-sm text-blue-700 font-semibold mb-2">📧 Email</p>
                  <p className="text-lg font-bold text-blue-900 break-all">{user.email}</p>
                </div>
                <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                  <p className="text-sm text-green-700 font-semibold mb-2">🆔 User ID</p>
                  <p className="text-lg font-bold text-green-900">#{user.id}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 flex-wrap">
                <button className="flex-1 min-w-[150px] bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105">
                  💬 Send Message
                </button>
                <button className="flex-1 min-w-[150px] border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 rounded-lg transition-all">
                  👥 Add Friend
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">ℹ️ Info</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-purple-700 font-semibold">Role</p>
                <p className="text-lg font-bold text-purple-900">
                  {user.role || "User"}
                </p>
              </div>
              <div>
                <p className="text-sm text-purple-700 font-semibold">Status</p>
                <p className="text-lg font-bold text-purple-900">Active</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">📊 Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-green-800">Posts</span>
                <span className="font-bold text-green-900">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-800">Followers</span>
                <span className="font-bold text-green-900">142</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-800">Following</span>
                <span className="font-bold text-green-900">56</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">🌐 Social</h3>
            <div className="space-y-3 text-center">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition-colors">
                Visit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div>
        <Link
          to="/app-route"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
        >
          ← Back to Users
        </Link>
      </div>
    </div>
  );
}
