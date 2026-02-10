import { NavLink } from "react-router-dom";
import { useCount } from "../CounterContext/hook/useCounter";
import { ROUTES } from "../../shared/routes";

export default function NavBar() {
  const { count } = useCount();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-lg transition-colors duration-200 ${
      isActive
        ? "bg-blue-100 text-blue-700 font-semibold border-b-2 border-blue-600"
        : "text-gray-900 hover:bg-gray-200"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Logo / Brand */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-blue-600 hover:text-purple-600 transition-colors"
          >
            <span className="text-3xl">⚛️</span>
            <span>ReactApp</span>
          </NavLink>

          {/* Main Navigation */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Core Features */}
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to={ROUTES.ABOUT} className={navLinkClass}>
              About
            </NavLink>

            {/* Components & Features */}
            <NavLink to={ROUTES.COUNTER} className={navLinkClass}>
              Counter
            </NavLink>
            <NavLink to="/app-route" className={navLinkClass}>
              Users
            </NavLink>

            {/* Products & APIs */}
            <NavLink to="/products" className={navLinkClass}>
              Products
            </NavLink>

            {/* Tools */}
            <NavLink to={ROUTES.IDEAL_WEIGHT} className={navLinkClass}>
              Tools
            </NavLink>
          </div>

          {/* Right Side - Counter Badge & Auth */}
          <div className="flex items-center gap-3">
            {/* Counter Badge */}
            <div className="bg-pink-600 text-white px-4 py-2 rounded-full font-bold text-sm">
              Count: {count}
            </div>

            {/* Auth Links */}
            <NavLink to={ROUTES.SIGN_IN} className={navLinkClass}>
              Sign In
            </NavLink>
            <NavLink
              to={ROUTES.SIGN_UP}
              className="px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-blue-600 transition-colors"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
