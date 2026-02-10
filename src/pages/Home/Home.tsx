import { Link } from "react-router-dom";
import { ROUTES } from "../../shared/routes";

export default function Home() {
  const features = [
    {
      icon: "⚛️",
      title: "React 19",
      description: "Latest React with hooks and concurrent features"
    },
    {
      icon: "📘",
      title: "TypeScript",
      description: "Type-safe development for better code quality"
    },
    {
      icon: "⚡",
      title: "Vite",
      description: "Lightning-fast build tool and development server"
    },
    {
      icon: "🎨",
      title: "Tailwind CSS",
      description: "Utility-first CSS for rapid UI development"
    },
    {
      icon: "🧭",
      title: "React Router v7",
      description: "Advanced routing with nested routes"
    },
    {
      icon: "📝",
      title: "Form Validation",
      description: "Formik + Yup for robust form handling"
    }
  ];

  const showcase = [
    {
      icon: "🔐",
      title: "Authentication",
      description: "Sign up and create your account with form validation",
      link: ROUTES.SIGN_UP
    },
    {
      icon: "👤",
      title: "User Management",
      description: "Browse users and view detailed profiles with routing",
      link: "/app-route"
    },
    {
      icon: "🛠️",
      title: "Interactive Tools",
      description: "Calculators and interactive utilities showcasing React patterns",
      link: ROUTES.IDEAL_WEIGHT
    },
    {
      icon: "🛒",
      title: "Products & APIs",
      description: "Browse products and explore real API integration with Nationalize.io",
      link: ROUTES.PRODUCTS
    },
    {
      icon: "📈",
      title: "Counter State",
      description: "Global state management using Context API",
      link: ROUTES.COUNTER
    },
    {
      icon: "ℹ️",
      title: "Learn More",
      description: "Discover the technologies and patterns used in this project",
      link: ROUTES.ABOUT
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            React Feature Showcase
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            A modern, full-featured React + TypeScript application demonstrating best practices, 
            advanced patterns, and beautiful UI design
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={ROUTES.SIGN_UP}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <a
              href="https://github.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Built with Modern Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-blue-600"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Showcase */}
      <section>
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Explore Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcase.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 hover:border-blue-600"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <span className="inline-block text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">✨ Featured Products</h2>
          <p className="text-lg opacity-90">Discover our curated collection of amazing products with the best quality and pricing.</p>
        </div>
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Browse Our Collection</h3>
            <span className="text-3xl">🛒</span>
          </div>
          <p className="text-gray-600 mb-6">
            We have carefully selected thousands of products from top sellers. Click the button below to explore all our featured items and find exactly what you're looking for.
          </p>
          <Link
            to={ROUTES.PRODUCTS}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            View All Products →
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white rounded-2xl py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-blue-400 mb-2">19</div>
            <p className="text-gray-300">React Version</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-400 mb-2">10+</div>
            <p className="text-gray-300">Components</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-400 mb-2">100%</div>
            <p className="text-gray-300">TypeScript</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-400 mb-2">5</div>
            <p className="text-gray-300">API Integrations</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Ready to Explore?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          This project demonstrates modern React development practices and patterns. 
          Explore the features, check the code, and use it as inspiration for your own projects.
        </p>
        <Link
          to={ROUTES.ABOUT}
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
        >
          Learn More
        </Link>
      </section>
    </div>
  );
}

