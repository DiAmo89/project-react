import "./App.css";
import "./index.css";
// import Counter from "./components/Counter/Counter";
// import Goodbye from "./components/GoodBye/Goodbye";
import Greetings from "./components/Greetings/Greetings";
import Tool from "./components/Tool/Tool";
import ProfileCard from "./components/ProfileCard/ProfileCard"

function App() {
  return (
    <><div className="app-container">
      <div className="container">
        <Greetings name="Dima" />
        <Tool />
      </div>
      <div className="profile">
        <ProfileCard avatar="https://api.dicebear.com/9.x/adventurer/svg?seed=Easton" name="Dima" description="Full Stack developer" />
      </div>

    </div>
      
      {/* <Goodbye familyName="Dima" score={89} />
      <Counter /> */}
    </>
  );
}

export default App;
