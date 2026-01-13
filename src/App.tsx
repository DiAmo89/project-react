import "./App.css";
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts/>}>
            <Route index element={<Home />} />
            <Route path="/gender-reveal" element={<GenderReveal />} />
            <Route path="/ideal=weight" element={<IdealWeightCalculator />} />
            <Route path="/space=mission" element={<SpaceMissionForm />} />
            <Route path="/api-nationalize" element={<Apinationalize />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
