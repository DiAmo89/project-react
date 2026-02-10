import { Link } from "react-router-dom";
import { useState } from "react";

export default function Settings() {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: false,
    darkMode: false,
    language: "en",
  });

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-12">
        <h1 className="text-5xl font-bold mb-4">⚙️ Settings</h1>
        <p className="text-lg opacity-90">
          Customize your preferences and application behavior.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Settings Sections */}
        <div className="lg:col-span-2 space-y-8">
          {/* Notifications Section */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
              <h2 className="text-2xl font-bold">🔔 Notifications</h2>
            </div>
            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl">
                <div>
                  <p className="font-bold text-gray-900">Email Notifications</p>
                  <p className="text-sm text-gray-600">Get updates via email</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.emailNotifications}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      emailNotifications: e.target.checked,
                    })
                  }
                  className="w-6 h-6 cursor-pointer accent-blue-600"
                />
              </div>
              <div className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl">
                <div>
                  <p className="font-bold text-gray-900">Push Notifications</p>
                  <p className="text-sm text-gray-600">Get browser notifications</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.pushNotifications}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      pushNotifications: e.target.checked,
                    })
                  }
                  className="w-6 h-6 cursor-pointer accent-blue-600"
                />
              </div>
            </div>
          </div>

          {/* Display Section */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-purple-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
              <h2 className="text-2xl font-bold">🌙 Display</h2>
            </div>
            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl">
                <div>
                  <p className="font-bold text-gray-900">Dark Mode</p>
                  <p className="text-sm text-gray-600">Easy on the eyes at night</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.darkMode}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      darkMode: e.target.checked,
                    })
                  }
                  className="w-6 h-6 cursor-pointer accent-purple-600"
                />
              </div>
              <div className="space-y-3">
                <label className="block text-lg font-semibold text-gray-900">
                  🌍 Language
                </label>
                <select
                  value={preferences.language}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      language: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white"
                >
                  <option value="en">English</option>
                  <option value="ro">Română</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 flex-wrap">
            <button className="flex-1 min-w-[200px] bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105">
              💾 Save Changes
            </button>
            <Link
              to="/profile"
              className="flex-1 min-w-[200px] text-center border-2 border-blue-600 bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 rounded-lg transition-all"
            >
              ← Back to Profile
            </Link>
          </div>
        </div>

        {/* Info Sidebar */}
        <div className="space-y-6">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">💡 Tips</h3>
            <ul className="space-y-2 text-blue-800 text-sm">
              <li>✓ Changes are saved automatically</li>
              <li>✓ Your preferences sync across devices</li>
              <li>✓ Privacy settings are always respected</li>
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">🔒 Privacy</h3>
            <p className="text-green-800 text-sm leading-relaxed">
              Your data is encrypted and never shared with third parties.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-red-900 mb-3">⚠️ Danger Zone</h3>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
