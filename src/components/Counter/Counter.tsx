import { useCount } from "../CounterContext/hook/useCounter";

function Counter() {
  const { count, increment, decrement } = useCount();

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-12">
        <h1 className="text-5xl font-bold mb-4">📊 Counter Application</h1>
        <p className="text-lg opacity-90">
          Learn how Context API works for global state management. This counter is accessible from any page!
        </p>
      </div>

      {/* Main Counter Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Counter Card */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
            <h2 className="text-2xl font-bold mb-2">Current Count</h2>
            <p className="text-blue-100">Your counter value</p>
          </div>
          <div className="p-12 text-center">
            <div className="text-7xl font-bold text-blue-600 mb-8 tabular-nums">{count}</div>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                type="button"
                onClick={() => decrement(5)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-200 transform hover:scale-110 shadow-lg"
              >
                − 5
              </button>
              <button
                type="button"
                onClick={() => decrement(1)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-200 transform hover:scale-110 shadow-lg"
              >
                − 1
              </button>
              <button
                type="button"
                onClick={() => increment(1)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-200 transform hover:scale-110 shadow-lg"
              >
                + 1
              </button>
              <button
                type="button"
                onClick={() => increment(5)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-200 transform hover:scale-110 shadow-lg"
              >
                + 5
              </button>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-6">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">🌐 Context API</h3>
            <p className="text-blue-800 leading-relaxed">
              This counter uses React Context to manage state globally. The value persists across all pages of the application without prop drilling!
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-green-900 mb-3">🎣 Custom Hooks</h3>
            <p className="text-green-800 leading-relaxed">
              The useCounter hook provides a clean interface to access and modify the global count state.
            </p>
          </div>

          <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-3">💾 Global State</h3>
            <p className="text-purple-800 leading-relaxed">
              Counter updates are instant across all components. Navigate to different pages - your count value stays the same!
            </p>
          </div>
        </div>
      </div>

      {/* Code Example */}
      <div className="bg-gray-900 text-white rounded-2xl p-8 border-2 border-gray-700">
        <h3 className="text-2xl font-bold mb-6">💻 How to Use</h3>
        <pre className="text-sm font-mono overflow-x-auto bg-gray-800 p-4 rounded-lg border border-gray-700">
          {`// 1. Import the hook
import { useCount } from './hook/useCounter';

// 2. Use it in your component
function MyComponent() {
  const { count, increment, decrement } = useCount();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => increment(1)}>+</button>
      <button onClick={() => decrement(1)}>-</button>
    </div>
  );
}`}
        </pre>
      </div>

      {/* Key Learnings */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">📚 Key Concepts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="text-3xl">⚛️</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">React Context</h4>
              <p className="text-gray-600 text-sm">
                Context provides a way to pass data through multiple component levels without prop drilling
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">🎣</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Custom Hooks</h4>
              <p className="text-gray-600 text-sm">
                useCounter encapsulates context logic for reusability across components
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">🔄</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">State Updates</h4>
              <p className="text-gray-600 text-sm">
                increment() and decrement() are easy-to-use functions for updating global state
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl">⚡</div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Performance</h4>
              <p className="text-gray-600 text-sm">
                Components only re-render when the counter value actually changes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
