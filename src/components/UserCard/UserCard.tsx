import type { FC } from "react";
import type User from "../../types/User";
import { Link } from "react-router-dom";

export const UserCard: FC<User> = (user) => {
  const roleColors: Record<string, { bg: string; text: string; icon: string }> = {
    admin: { bg: "bg-red-100", text: "text-red-700", icon: "👑" },
    moderator: { bg: "bg-purple-100", text: "text-purple-700", icon: "🛡️" },
    user: { bg: "bg-blue-100", text: "text-blue-700", icon: "👤" },
  };

  const roleStyle = roleColors[user.role] || roleColors.user;

  return (
    <Link
      to={`/app-route/users/${user.id}`}
      className="group block h-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-blue-300"
    >
      {/* Image Section */}
      <div className="relative h-56 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500 filter group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300"></div>
        
        {/* Role Badge */}
        <div className={`absolute top-4 right-4 ${roleStyle.bg} ${roleStyle.text} px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg backdrop-blur-sm`}>
          <span>{roleStyle.icon}</span>
          <span className="capitalize font-semibold">{user.role}</span>
        </div>

        {/* ID Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          ID: #{user.id}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Name */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
            {user.name}
          </h3>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-full transition-all duration-300"></div>
        </div>

        {/* Info Grid */}
        <div className="space-y-3 bg-gray-50 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✉️</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 font-semibold">EMAIL</p>
              <p className="text-sm text-gray-900 font-semibold truncate">{user.email}</p>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌐</span>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-semibold">USERNAME</p>
              <p className="text-sm text-gray-900 font-semibold capitalize">{user.name.split(" ").join("").toLowerCase()}</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg group-hover:shadow-xl flex items-center justify-center gap-2">
            <span>View Full Profile</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-200">
          <div className="bg-blue-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-blue-600">✨</p>
            <p className="text-xs text-gray-600 font-semibold mt-1">Member</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-purple-600">🎯</p>
            <p className="text-xs text-gray-600 font-semibold mt-1">Active</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
