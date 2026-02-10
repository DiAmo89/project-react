import type User from "../../types/User";
import { UserCard } from "../../components/UserCard/UserCard";
import useUsers from "./useUsers";

export default function UsersList() {
  const { users } = useUsers();

  return (
    <div className="space-y-12">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-12">
        <h1 className="text-5xl font-bold mb-4">👥 Featured Users Directory</h1>
        <p className="text-lg opacity-90">
          Discover our amazing community of users. Each profile is interactive and leads to detailed information about real people.
        </p>
      </div>

      {/* Loading State */}
      {!users && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mb-4"></div>
          <span className="text-lg text-gray-600 font-semibold">Loading amazing users...</span>
        </div>
      )}

      {/* Empty State */}
      {users && users.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border-2 border-gray-200 shadow-xl">
          <p className="text-gray-600 text-xl font-semibold">No users found</p>
        </div>
      )}

      {/* Main Users Grid */}
      {users && users.length > 0 && (
        <>
          {/* Grid with beautiful layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {users.map((user: User) => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-8 text-center">
              <p className="text-5xl font-bold text-blue-700 mb-3">{users.length}</p>
              <p className="text-blue-900 font-bold text-lg">Total Users</p>
              <p className="text-blue-800 text-sm mt-2">Active community members</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-2xl p-8 text-center">
              <p className="text-5xl font-bold text-green-700 mb-3">100%</p>
              <p className="text-green-900 font-bold text-lg">Real Data</p>
              <p className="text-green-800 text-sm mt-2">From external API source</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-2xl p-8 text-center">
              <p className="text-5xl font-bold text-purple-700 mb-3">🚀</p>
              <p className="text-purple-900 font-bold text-lg">Live Loading</p>
              <p className="text-purple-800 text-sm mt-2">Dynamic API integration</p>
            </div>
          </div>

          {/* Features Showcase */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              ✨ Why This Page Is Special
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
                <p className="text-4xl mb-3">🌐</p>
                <p className="text-blue-900 font-bold mb-2">API Integration</p>
                <p className="text-blue-800 text-sm">
                  Real user data fetched from JSONPlaceholder API with error handling
                </p>
              </div>
              <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
                <p className="text-4xl mb-3">🎯</p>
                <p className="text-green-900 font-bold mb-2">Dynamic Routes</p>
                <p className="text-green-800 text-sm">
                  Each user card navigates to a unique profile page with React Router
                </p>
              </div>
              <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-6">
                <p className="text-4xl mb-3">📱</p>
                <p className="text-purple-900 font-bold mb-2">Responsive Grid</p>
                <p className="text-purple-800 text-sm">
                  Adaptive layout from 1 column on mobile to 4 columns on desktop
                </p>
              </div>
              <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-6">
                <p className="text-4xl mb-3">✨</p>
                <p className="text-orange-900 font-bold mb-2">Interactive Cards</p>
                <p className="text-orange-800 text-sm">
                  Hover effects, scale animations, and smooth transitions throughout
                </p>
              </div>
            </div>
          </div>

          {/* How To Use Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl text-white p-10">
              <h3 className="text-2xl font-bold mb-6">🎯 How to Use This Page</h3>
              <ol className="space-y-4 text-blue-50">
                <li className="flex gap-4">
                  <span className="font-bold text-xl text-blue-200">1</span>
                  <span>Browse through the user cards in the beautiful grid layout</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-xl text-blue-200">2</span>
                  <span>Click on any user card to see their full profile page</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-xl text-blue-200">3</span>
                  <span>View user details including email, role, and unique ID</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-xl text-blue-200">4</span>
                  <span>Navigate back to explore more users from the directory</span>
                </li>
              </ol>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-green-900 mb-6">💡 React Concepts</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-2xl">🎣</span>
                  <div>
                    <p className="font-bold text-green-900">Custom Hooks</p>
                    <p className="text-green-800 text-sm">useUsers hook manages API calls</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">📦</span>
                  <div>
                    <p className="font-bold text-green-900">Component Composition</p>
                    <p className="text-green-800 text-sm">UserCard component reusability</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">🔀</span>
                  <div>
                    <p className="font-bold text-green-900">React Router</p>
                    <p className="text-green-800 text-sm">Dynamic routing to user profiles</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-bold text-green-900">Performance</p>
                    <p className="text-green-800 text-sm">Optimized rendering with keys</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
