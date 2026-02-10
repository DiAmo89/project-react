import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

export default function Layouts() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header>
        <NavBar />
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-dark text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About</h3>
              <p className="text-gray-400">
                A modern React + TypeScript showcase application.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Features</h3>
              <ul className="text-gray-400 space-y-2">
                <li>React 19 + TypeScript</li>
                <li>Tailwind CSS</li>
                <li>React Router v7</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-400">Built with ❤️ for developers</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 React Feature Showcase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
