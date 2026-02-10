import { Routes, Route } from "react-router-dom";
import Layouts from "../../layouts/Layouts";
import ProfileLayout from "../../layouts/ProfileLayout";
import About from "../../pages/About/About";
import AppRoute from "../../pages/AppRoute/AppRoute";
import CarPage from "../../pages/CarPage/CarPage";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import ProductPage from "../../pages/ProductPage/ProductPage";
import Profile from "../../pages/Profile/Profile";
import ProfileData from "../../pages/ProfileData/ProfileData";
import Settings from "../../pages/Settings/Settings";
import UserPage from "../../pages/UserPage/UserPage";
import UsersList from "../../pages/UsersList/UsersList";
import Products from "../../pages/Products/Products";
import GenderReveal from "../GenderReveal/GenderReveal";
import IdealWeightCalculator from "../IdealWeightCalculator/IdealWeightCalculator";
import SpaceMissionForm from "../SpaceMissionForm/SpaceMissionForm";
import { ROUTES } from "../../shared/routes";
import SignUp from "../../pages/SignUp/SignUp";
import CreateCategory from "../../pages/CreateCategory/CreateCategory";
import Parent from "../Family/Parent";
import Counter from "../Counter/Counter";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.GENDEAR_REVEAL} element={<GenderReveal />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path="counter" element={<Counter />}></Route>

        <Route path={ROUTES.CREATE_CATEGORY} element={<CreateCategory />} />
        <Route path={"/parent"} element={<Parent />} />
        <Route path={ROUTES.IDEAL_WEIGHT} element={<IdealWeightCalculator />} />
        <Route path="space-mission" element={<SpaceMissionForm />} />
        <Route path="products" element={<Products />} />
        <Route path="app-route" element={<AppRoute />}>
          <Route index element={<UsersList />} />
          <Route path="users" element={<UsersList />} />
          <Route path="users/:id" element={<UserPage />} />
        </Route>
      </Route>
      <Route path="products/:id" element={<ProductPage />}></Route>
      <Route path="cars/:model" element={<CarPage />}></Route>

      <Route path="/profile" element={<ProfileLayout />}>
        <Route index element={<Profile />} />
        <Route path="profile-data" element={<ProfileData />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
