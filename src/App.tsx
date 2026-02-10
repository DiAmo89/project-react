import "./index.css";
import RoutesApp from "./components/RoutesApp/RoutesApp";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/providers/AuthProvider";
import { CounterProvider } from "./components/CounterContext/provider/CounterProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CounterProvider>
            <RoutesApp />
          </CounterProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
