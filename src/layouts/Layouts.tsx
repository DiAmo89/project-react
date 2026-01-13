import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

export default function Layouts() {
  return (
    <>
      <header><NavBar/></header>
      <Outlet/>
      <footer>Footer</footer>
    </>
  );
}
