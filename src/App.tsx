import "./index.css";
// import Counter from "./components/Counter/Counter";
// import Goodbye from "./components/GoodBye/Goodbye";
// import Greetings from "./components/Greetings/Greetings";
// import Tool from "./components/Tool/Tool";
// import ProfileCard from "./components/ProfileCard/ProfileCard";
import IdealWeightCalculator from "./components/IdealWeightCalculator/IdealWeightCalculator";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
// import RandomDog from "./components/RandomDog/RandomDog";
import GenderReveal from "./components/GenderReveal/GenderReveal";
import Apinationalize from "./components/ApiNationalize/Apinationalize";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Layouts from "./layouts/Layouts";
import About from "./pages/About/About";
import ProfileLayout from "./layouts/ProfileLayout";
import Profile from "./pages/Profile/Profile";
import ProfileData from "./pages/ProfileData/ProfileData";
import Settings from "./pages/Settings/Settings";
import ProductPage from "./pages/ProductPage/ProductPage";
import CarPage from "./pages/CarPage/CarPage";
import AppRoute from "./pages/AppRoute/AppRoute";
import UsersList from "./pages/UsersList/UsersList";
import UserPage from "./pages/UserPage/UserPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gender-reveal" element={<GenderReveal />} />
            <Route path="ideal-weight" element={<IdealWeightCalculator />} />
            <Route path="space-mission" element={<SpaceMissionForm />} />
            <Route path="api-nationalize" element={<Apinationalize />} />
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
      </BrowserRouter>
    </>
  );
}

export default App;
