import { useState } from "react";

export default function IdealWeightCalculator() {
  const [height, setHeight] = useState("170");
  const [idealWeight, setIdealWeight] = useState(0);
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState("female");

  function handleCalculateIdealWeight() {
    const toSub = gender === "male" ? 100 : 110;
    const weight = Number(height) - toSub;
    if (weight < 0) {
      setMessage("Our program does not work for heights less than 100cm");
    } else {
      setMessage("");
      setIdealWeight(weight);
    }
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-12">
        <h1 className="text-5xl font-bold mb-4">⚖️ Ideal Weight Calculator</h1>
        <p className="text-lg opacity-90">
          Calculate your ideal weight based on the Devine formula using your height and gender. Discover your personalized health recommendations.
        </p>
      </div>

      {/* Main Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculator Card */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
            <h2 className="text-2xl font-bold mb-2">Calculate Now</h2>
            <p className="text-blue-100">Enter your details below</p>
          </div>
          <div className="p-8 space-y-6">
            {/* Gender Selection */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                👥 Gender
              </label>
              <select
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-600 text-gray-900 bg-white cursor-pointer font-medium"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Height Input */}
            <div>
              <label
                htmlFor="height"
                className="block text-lg font-semibold text-gray-900 mb-3"
              >
                📏 Height (cm)
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="height"
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-600 text-gray-900 font-semibold text-lg"
                  placeholder="Enter your height"
                  min="0"
                />
                <span className="absolute right-4 top-3 text-gray-500 text-lg font-semibold">
                  cm
                </span>
              </div>
            </div>

            {/* Calculate Button */}
            <button
              type="button"
              onClick={handleCalculateIdealWeight}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-lg"
            >
              Calculate Ideal Weight ⚖️
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-6">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-3">📐 Formula</h3>
            <p className="text-blue-800 leading-relaxed mb-4">
              The <strong>Devine Formula</strong> is a scientifically-backed method to calculate ideal weight.
            </p>
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-gray-700 mb-2"><strong>Males:</strong> Height (cm) - 100</p>
              <p className="text-sm text-gray-700"><strong>Females:</strong> Height (cm) - 110</p>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-green-900 mb-3">💪 Disclaimer</h3>
            <p className="text-green-800 leading-relaxed">
              This calculator is for informational purposes only. Always consult with a healthcare professional for personalized health advice.
            </p>
          </div>

          <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-3">🎯 How It Works</h3>
            <p className="text-purple-800 leading-relaxed">
              Simply enter your gender and height, then click calculate. Your ideal weight will appear below based on the Devine formula.
            </p>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {message && (
        <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8">
          <p className="text-red-900 font-bold text-lg mb-2">⚠️ Note</p>
          <p className="text-red-800 text-base">{message}</p>
        </div>
      )}

      {idealWeight && !message && (
        <div className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-300 rounded-2xl p-10 text-center">
          <p className="text-gray-700 mb-4 font-semibold text-lg">Your Ideal Weight:</p>
          <div className="flex items-baseline justify-center gap-3 mb-6">
            <span className="text-7xl font-bold text-green-600">
              {idealWeight.toFixed(1)}
            </span>
            <span className="text-3xl text-green-700 font-semibold">kg</span>
          </div>
          <p className="text-green-800 text-base">
            Based on the <strong>{gender === "male" ? "Male" : "Female"}</strong> Devine formula with <strong>{height}cm</strong> height
          </p>
        </div>
      )}

      {/* Key Concepts */}
      <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">
          📚 React Concepts Demonstrated
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
            <div className="text-4xl mb-3">🎣</div>
            <h4 className="font-bold text-blue-900 mb-2">useState Hook</h4>
            <p className="text-blue-800 text-sm">
              Managing height, gender, weight, and error messages state
            </p>
          </div>
          <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
            <div className="text-4xl mb-3">⚡</div>
            <h4 className="font-bold text-green-900 mb-2">Event Handling</h4>
            <p className="text-green-800 text-sm">
              Form inputs and button click handlers for calculations
            </p>
          </div>
          <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-6">
            <div className="text-4xl mb-3">🔄</div>
            <h4 className="font-bold text-purple-900 mb-2">Conditional Rendering</h4>
            <p className="text-purple-800 text-sm">
              Display results or error messages based on calculation state
            </p>
          </div>
          <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-6">
            <div className="text-4xl mb-3">📊</div>
            <h4 className="font-bold text-orange-900 mb-2">Form Validation</h4>
            <p className="text-orange-800 text-sm">
              Validating height input and displaying appropriate feedback
            </p>
          </div>
        </div>
      </div>

      {/* Code Example */}
      <div className="bg-gray-900 text-white rounded-2xl p-8 border-2 border-gray-700">
        <h3 className="text-2xl font-bold mb-6">💻 Code Example</h3>
        <pre className="text-sm font-mono overflow-x-auto bg-gray-800 p-4 rounded-lg border border-gray-700">
          {`// Calculate using Devine Formula
const handleCalculate = () => {
  const subtractor = gender === "male" ? 100 : 110;
  const weight = Number(height) - subtractor;
  
  if (weight < 0) {
    setMessage("Height too low!");
  } else {
    setIdealWeight(weight);
    setMessage("");
  }
};

// Result: 170cm female = 170 - 110 = 60kg`}
        </pre>
      </div>
    </div>
  );
}
