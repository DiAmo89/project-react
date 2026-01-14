import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import clsx from "clsx";

export default function NavBar() {
  const navlinkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(s.link, isActive && s.active);
  return (
    <nav className={s.container}>
      <NavLink to={"/"} className={navlinkClass}>
        Home
      </NavLink>
      <NavLink to={"/about"} className={navlinkClass}>
        About
      </NavLink>
      <NavLink to={"/app-route"} className={navlinkClass}>
        AppRoute
      </NavLink>
      <NavLink to={"/gender-reveal"} className={navlinkClass}>
        Gender Reveal
      </NavLink>
      <NavLink to={"/ideal-weight"} className={navlinkClass}>
        IdealWeightCalculator
      </NavLink>
      <NavLink to={"/space-mission"} className={navlinkClass}>
        SpaceMissionForm
      </NavLink>
      <NavLink to={"/api-nationalize"} className={navlinkClass}>
        ApiNationalize
      </NavLink>
      <NavLink to={"/profile"} className={navlinkClass}>
        Profile
      </NavLink>
    </nav>
  );
}
