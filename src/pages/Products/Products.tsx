import { useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import Apinationalize from "../../components/ApiNationalize/Apinationalize";

export default function Products() {
  const [activeTab, setActiveTab] = useState<"products" | "api">("products");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-12">
        <h1 className="text-5xl font-bold mb-4">🛒 Products & APIs</h1>
        <p className="text-xl opacity-90">Explore our featured products and learn how to integrate with real APIs</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-4 border-b-2 border-gray-200">
        <button
          onClick={() => setActiveTab("products")}
          className={`px-6 py-3 font-bold transition-colors duration-200 ${
            activeTab === "products"
              ? "text-blue-600 border-b-2 border-blue-600 -mb-0.5"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          🛍️ Featured Products
        </button>
        <button
          onClick={() => setActiveTab("api")}
          className={`px-6 py-3 font-bold transition-colors duration-200 ${
            activeTab === "api"
              ? "text-blue-600 border-b-2 border-blue-600 -mb-0.5"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          🌍 API Integration (Nationalize)
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "products" && (
          <div className="space-y-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-blue-900 mb-3">✨ Featured Products</h2>
              <p className="text-blue-800">
                Browse our curated collection of high-quality products. This section demonstrates:
              </p>
              <ul className="list-disc list-inside text-blue-800 mt-2 space-y-1">
                <li>API data fetching and management</li>
                <li>Responsive grid layouts with Tailwind CSS</li>
                <li>Product cards with hover effects</li>
                <li>Loading and error states</li>
                <li>Dynamic routing to product pages</li>
              </ul>
            </div>
            <ProductList />
          </div>
        )}

        {activeTab === "api" && (
          <div className="space-y-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-green-900 mb-3">🌍 Nationality Predictor API</h2>
              <p className="text-green-800">
                Enter any name below and the Nationalize.io API will predict its probable nationality. This section demonstrates:
              </p>
              <ul className="list-disc list-inside text-green-800 mt-2 space-y-1">
                <li>Real-world API integration (Nationalize.io)</li>
                <li>Async/await and error handling</li>
                <li>Loading states and spinners</li>
                <li>Data visualization with progress bars</li>
                <li>Dynamic rendering of API responses</li>
                <li>User input validation</li>
              </ul>
            </div>
            <Apinationalize />
          </div>
        )}
      </div>

      {/* Key Features Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">📚 What You'll Learn Here</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="text-4xl">🔄</div>
            <h4 className="font-bold text-gray-900">Data Fetching</h4>
            <p className="text-gray-600 text-sm">
              How to fetch and manage data from external APIs using the Fetch API
            </p>
          </div>
          <div className="space-y-3">
            <div className="text-4xl">⚙️</div>
            <h4 className="font-bold text-gray-900">State Management</h4>
            <p className="text-gray-600 text-sm">
              Managing loading, error, and success states in React components
            </p>
          </div>
          <div className="space-y-3">
            <div className="text-4xl">🎨</div>
            <h4 className="font-bold text-gray-900">UI Components</h4>
            <p className="text-gray-600 text-sm">
              Building responsive and interactive UI components with Tailwind CSS
            </p>
          </div>
          <div className="space-y-3">
            <div className="text-4xl">🔍</div>
            <h4 className="font-bold text-gray-900">Data Visualization</h4>
            <p className="text-gray-600 text-sm">
              Displaying complex data in user-friendly formats
            </p>
          </div>
          <div className="space-y-3">
            <div className="text-4xl">⚡</div>
            <h4 className="font-bold text-gray-900">Performance</h4>
            <p className="text-gray-600 text-sm">
              Optimizing API calls and rendering for better UX
            </p>
          </div>
          <div className="space-y-3">
            <div className="text-4xl">🛡️</div>
            <h4 className="font-bold text-gray-900">Error Handling</h4>
            <p className="text-gray-600 text-sm">
              Gracefully handling and displaying error messages
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
