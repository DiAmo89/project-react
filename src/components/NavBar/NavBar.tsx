import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css"

export default function NavBar() {
  return (
    <nav className={s.container}>
      <NavLink to={"/"}className={s.link} >Home</NavLink>
      <NavLink to={"/gender-reveal"} className={s.link}>Gender Reveal</NavLink>
      <NavLink to={"/ideal=weight"} className={s.link}>IdealWeightCalculator</NavLink>
      <NavLink to={"/space=mission"} className={s.link}>SpaceMissionForm</NavLink>
      <NavLink to={"/api-nationalize"} className={s.link}>ApiNationalize</NavLink>
    </nav>
  );
}
