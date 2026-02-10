import { useState } from "react";
import type { ApiNationalizeInfo } from "./ApiNationalizeInfo";
import getCountryFullName from "../../utils/getCountryFullName";

export default function Apinationalize() {
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState<ApiNationalizeInfo | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchApiNationalize(name: string) {
    if (!name.trim()) {
      setError("Please enter a name");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.nationalize.io/?name=${encodeURIComponent(name)}`,
      );
      if (!res.ok) throw new Error("Failed to fetch nationality data");

      const data = await res.json();

      if (!data.country || data.country.length === 0) {
        setError("No nationality data found for this name");
        setInfo(undefined);
      } else {
        setInfo(data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setInfo(undefined);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      fetchApiNationalize(name);
    }
  }

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-dark mb-3">
          Nationality Predictor
        </h1>
        <p className="text-gray-600 text-lg">
          Discover the most likely nationality of a given name using the
          Nationalize.io API. Enter a name and we'll predict which countries
          it's most common in with probability percentages.
        </p>
      </div>

      {/* Search Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-dark mb-3"
            >
              Enter a Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setInfo(undefined);
                setError(null);
              }}
              onKeyPress={handleKeyPress}
              placeholder="e.g., John, Maria, Ahmed..."
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary text-gray-700 transition-colors"
            />
            <p className="text-sm text-gray-500 mt-2">
              Press Enter or click Search
            </p>
          </div>

          <button
            type="button"
            onClick={() => fetchApiNationalize(name)}
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 text-lg"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                Analyzing...
              </span>
            ) : (
              "🔍 Search Nationality"
            )}
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-6 rounded-lg">
          <p className="font-bold">⚠️ Error</p>
          <p className="mt-1">{error}</p>
        </div>
      )}

      {/* Results Card */}
      {info && (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark mb-2">
              📍 {info.name}
            </h2>
            <p className="text-gray-600">
              Analyzed {info.count} records from the database
            </p>
          </div>

          {/* Countries List */}
          <div className="space-y-4">
            <h3 className="font-bold text-dark text-lg mb-4">
              Most Likely Countries:
            </h3>
            {info.country
              .sort((a, b) => b.probability - a.probability)
              .map((country, idx) => (
                <div
                  key={country.country_id}
                  className="bg-white rounded-lg p-4 border border-gray-200 hover:border-primary transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">
                        {idx === 0
                          ? "🥇"
                          : idx === 1
                            ? "🥈"
                            : idx === 2
                              ? "🥉"
                              : "•"}
                      </span>
                      <div>
                        <p className="font-semibold text-dark">
                          {getCountryFullName(country.country_id)}
                        </p>
                        <p className="text-sm text-gray-500">
                          Country Code: {country.country_id}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-primary">
                        {(country.probability * 100).toFixed(1)}%
                      </p>
                      <div className="mt-2 w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${country.probability * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Statistics */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Top Match</p>
              <p className="text-2xl font-bold text-primary">
                {(info.country[0].probability * 100).toFixed(1)}%
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Records Found</p>
              <p className="text-2xl font-bold text-secondary">
                {info.count.toLocaleString()}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <p className="text-sm text-gray-600">Countries</p>
              <p className="text-2xl font-bold text-blue-600">
                {info.country.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Information Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-bold text-blue-900 mb-4">ℹ️ About This Tool</h3>
        <div className="space-y-3 text-blue-900 text-sm">
          <p>
            <strong>API:</strong> This tool uses the{" "}
            <a
              href="https://nationalize.io"
              className="underline hover:text-blue-700"
            >
              Nationalize.io
            </a>{" "}
            API
          </p>
          <p>
            <strong>How It Works:</strong> The API predicts nationality based on
            the given name by analyzing a database of names from different
            countries with their associated probabilities.
          </p>
          <p>
            <strong>Accuracy:</strong> Results are probabilistic estimates based
            on historical data patterns.
          </p>
          <p>
            <strong>Use Case:</strong> Useful for applications that need to make
            demographic predictions or provide localized content based on user
            names.
          </p>
        </div>
      </div>

      {/* Features Demonstrated */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h3 className="font-bold text-dark mb-4">💻 This Page Demonstrates</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span>✅</span>
            <span>Real-world API integration and data fetching</span>
          </li>
          <li className="flex gap-3">
            <span>✅</span>
            <span>Async/await with error handling</span>
          </li>
          <li className="flex gap-3">
            <span>✅</span>
            <span>Loading states and user feedback</span>
          </li>
          <li className="flex gap-3">
            <span>✅</span>
            <span>Data visualization with progress bars</span>
          </li>
          <li className="flex gap-3">
            <span>✅</span>
            <span>Complex data rendering and sorting</span>
          </li>
          <li className="flex gap-3">
            <span>✅</span>
            <span>Keyboard event handling</span>
          </li>
        </ul>
      </div>

      {/* Example Names */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h3 className="font-bold text-purple-900 mb-4">💡 Try These Names</h3>
        <div className="flex flex-wrap gap-2">
          {["John", "Maria", "Ahmed", "Yuki", "Carlos", "Natasha"].map(
            (exampleName) => (
              <button
                key={exampleName}
                onClick={() => {
                  setName(exampleName);
                  setTimeout(() => fetchApiNationalize(exampleName), 100);
                }}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-semibold"
              >
                {exampleName}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
