import { NavLink, Outlet } from "react-router-dom";
import s from "../components/NavBar/NavBar.module.css";
import clsx from "clsx";

export default function ProfileLayout() {
    const navlinkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(s.link, isActive && s.active);
  return (
    <div>
      <nav>
        <NavLink to={"/profile/settings"}  className={navlinkClass}>Settings</NavLink>
        <NavLink to={"/profile/profile-data"} className={navlinkClass}>ProfileData</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}