import ProfileCard from "../../components/ProfileCard/ProfileCard";

export default function About() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About This Project</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            A comprehensive showcase of modern React development practices,
            demonstrating advanced patterns, best practices, and beautiful UI
            design.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section>
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Project Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What is This?
            </h3>
            <p className="text-gray-600 mb-4">
              This is a full-featured React + TypeScript application built with
              Vite and styled with Tailwind CSS. It serves as both a learning
              resource and a professional portfolio piece.
            </p>
            <p className="text-gray-600">
              The project demonstrates real-world patterns including API
              integration, form handling, routing, state management, and
              responsive design.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Learn From It?
            </h3>
            <ul className="text-gray-600 space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-xl">✅</span>
                <span>Production-ready code patterns</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-xl">✅</span>
                <span>TypeScript best practices</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-xl">✅</span>
                <span>Modern React patterns</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 text-xl">✅</span>
                <span>Real API integration examples</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section>
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Technologies Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "React 19", desc: "Latest UI framework" },
            { name: "TypeScript", desc: "Type safety" },
            { name: "Vite", desc: "Fast build tool" },
            { name: "React Router v7", desc: "Advanced routing" },
            { name: "Tailwind CSS", desc: "Modern styling" },
            { name: "Formik + Yup", desc: "Form validation" },
            { name: "Context API", desc: "State management" },
            { name: "ESLint", desc: "Code quality" },
            { name: "Axios", desc: "API calls" },
          ].map((tech, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-lg text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
              <p className="opacity-90">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Highlight */}
      <section>
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Key Features Showcase
        </h2>
        <div className="space-y-4">
          {[
            {
              title: "Advanced Routing",
              desc: "Nested routes, dynamic segments, and route-based code splitting",
            },
            {
              title: "State Management",
              desc: "Context API with custom hooks for clean, scalable state management",
            },
            {
              title: "API Integration",
              desc: "Real-world examples with error handling, loading states, and data fetching",
            },
            {
              title: "Form Validation",
              desc: "Robust form handling with Formik and Yup for real-world validation needs",
            },
            {
              title: "Responsive Design",
              desc: "Mobile-first approach with Tailwind CSS for all screen sizes",
            },
            {
              title: "Type Safety",
              desc: "Full TypeScript implementation for safer, more maintainable code",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Developer Section */}
      <section>
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Developer
        </h2>
        <div className="flex justify-center">
          <ProfileCard
            avatar="/avatar3d.png"
            name={"Dumitru"}
            description={"Full Stack Developer & Project Creator"}
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center py-12 bg-gray-50 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Mission</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          To create high-quality, educational React projects that showcase
          modern development practices and serve as a reference for building
          professional applications.
        </p>
      </section>
    </div>
  );
}
