import { Link } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

export default function Profile() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-12">
        <h1 className="text-5xl font-bold mb-4">👤 Your Profile</h1>
        <p className="text-lg opacity-90">
          Manage your profile information, settings, and preferences in one place.
        </p>
      </div>

      {/* Profile Card */}
      <div className="flex justify-center">
        <ProfileCard
          avatar="/avatar3d.png"
          name={"John Doe"}
          description={"Web Developer | React Enthusiast"}
        />
      </div>

      {/* Profile Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-8 text-center transform hover:scale-105 transition-transform">
          <p className="text-5xl font-bold text-blue-600 mb-3">25</p>
          <p className="text-gray-600 font-semibold text-lg">Projects</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-8 text-center transform hover:scale-105 transition-transform">
          <p className="text-5xl font-bold text-purple-600 mb-3">150</p>
          <p className="text-gray-600 font-semibold text-lg">Followers</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-8 text-center transform hover:scale-105 transition-transform">
          <p className="text-5xl font-bold text-green-600 mb-3">5</p>
          <p className="text-gray-600 font-semibold text-lg">Years Exp.</p>
        </div>
      </div>

      {/* About & Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* About */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">ℹ️ About</h3>
          <p className="text-blue-800 leading-relaxed text-lg">
            Passionate full-stack developer with a focus on React and modern web
            technologies. Love building beautiful and functional applications that
            make a difference.
          </p>
        </div>

        {/* Skills */}
        <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-green-900 mb-4">🎯 Skills</h3>
          <div className="flex flex-wrap gap-3">
            {["React", "TypeScript", "Tailwind", "Node.js", "MongoDB"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Account Settings Section */}
      <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
          <h3 className="text-2xl font-bold">⚙️ Account Settings</h3>
        </div>
        <div className="p-8 space-y-4">
          <div className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer transform hover:scale-102">
            <div>
              <p className="font-bold text-gray-900 text-lg">📝 Edit Profile</p>
              <p className="text-sm text-gray-600">Update your information</p>
            </div>
            <span className="text-2xl">→</span>
          </div>
          <div className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer transform hover:scale-102">
            <div>
              <p className="font-bold text-gray-900 text-lg">🔒 Privacy Settings</p>
              <p className="text-sm text-gray-600">Control who sees your profile</p>
            </div>
            <span className="text-2xl">→</span>
          </div>
          <div className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer transform hover:scale-102">
            <div>
              <p className="font-bold text-gray-900 text-lg">🔔 Notifications</p>
              <p className="text-sm text-gray-600">Manage notification preferences</p>
            </div>
            <span className="text-2xl">→</span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 flex-wrap">
        <Link
          to="/"
          className="flex-1 min-w-[200px] text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105"
        >
          ← Back to Home
        </Link>
        <Link
          to="/app-route"
          className="flex-1 min-w-[200px] text-center border-2 border-blue-600 bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 rounded-lg transition-all"
        >
          Browse Users →
        </Link>
      </div>
    </div>
  );
}
