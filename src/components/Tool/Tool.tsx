function Tool() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-12">
        <h1 className="text-5xl font-bold mb-4">🛠️ Available Tools</h1>
        <p className="text-lg opacity-90">
          A collection of useful calculators and interactive tools demonstrating React patterns and real-world functionality.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Ideal Weight Calculator */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 overflow-hidden hover:shadow-xl transition-all">
          <div className="h-40 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <span className="text-7xl">⚖️</span>
          </div>
          <div className="p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ⚖️ Ideal Weight Calculator
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Calculate your ideal weight based on your height and gender using the Devine formula. 
              This tool demonstrates state management, form handling, and mathematical calculations.
            </p>
            <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4 mb-6 space-y-2">
              <p className="text-blue-800 font-semibold mb-3">📚 Concepts Demonstrated:</p>
              <p className="text-blue-800">✅ <strong>useState</strong> - Managing input and result state</p>
              <p className="text-blue-800">✅ Form validation and user input handling</p>
              <p className="text-blue-800">✅ Mathematical calculations and logic</p>
              <p className="text-blue-800">✅ Conditional rendering based on validation</p>
            </div>
            <a
              href="/ideal-weight"
              className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105"
            >
              Try Now →
            </a>
          </div>
        </div>

        {/* Nationality Predictor */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-green-200 overflow-hidden hover:shadow-xl transition-all">
          <div className="h-40 bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center">
            <span className="text-7xl">🌍</span>
          </div>
          <div className="p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              🌍 Nationality Predictor
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Predict the probable nationality of any name using the Nationalize.io API. 
              Demonstrates real-world API integration, async operations, and data visualization with progress bars.
            </p>
            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4 mb-6 space-y-2">
              <p className="text-green-800 font-semibold mb-3">📚 Concepts Demonstrated:</p>
              <p className="text-green-800">✅ Fetch API and async/await patterns</p>
              <p className="text-green-800">✅ Real API integration with error handling</p>
              <p className="text-green-800">✅ Loading and success states</p>
              <p className="text-green-800">✅ Data visualization with progress bars</p>
            </div>
            <a
              href="/products"
              className="inline-block w-full text-center bg-gradient-to-r from-green-600 to-teal-600 hover:shadow-lg text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105"
            >
              Try Now →
            </a>
          </div>
        </div>
      </div>

      {/* Key Learning Paths */}
      <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">
          📚 Key React Concepts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
            <div className="text-4xl mb-3">🎣</div>
            <h4 className="font-bold text-blue-900 mb-2">React Hooks</h4>
            <p className="text-blue-800 text-sm">
              useState, useEffect, and custom hooks for component logic
            </p>
          </div>
          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
            <div className="text-4xl mb-3">🌐</div>
            <h4 className="font-bold text-green-900 mb-2">API Integration</h4>
            <p className="text-green-800 text-sm">
              Fetch API, async/await, error handling, loading states
            </p>
          </div>
          <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-6">
            <div className="text-4xl mb-3">📊</div>
            <h4 className="font-bold text-purple-900 mb-2">Data Viz</h4>
            <p className="text-purple-800 text-sm">
              Progress bars, charts, formatted output, visual feedback
            </p>
          </div>
          <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-6">
            <div className="text-4xl mb-3">⚡</div>
            <h4 className="font-bold text-orange-900 mb-2">Performance</h4>
            <p className="text-orange-800 text-sm">
              Optimization, memoization, conditional rendering
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-300 rounded-2xl p-12 text-center">
        <h3 className="text-3xl font-bold text-purple-900 mb-3">
          🚀 More Tools Coming Soon
        </h3>
        <p className="text-purple-800 text-lg">
          We're constantly adding new interactive tools and calculators. Check back soon for more features!
        </p>
      </div>
    </div>
  );
}

export default Tool;
