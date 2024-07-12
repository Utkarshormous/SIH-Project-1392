import logo from "./logo.svg";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import RefurbishRes from "./Components/RefurbishRes";
import Background from "./Components/Background";
import SignIn from "./Components/SignIn";
import Sell from "./Components/Sell";
import EwasteLocator from "./Components/EwasteLocator";
import LeftArea from "./Components/LeftArea";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Background />} />
          <Route path="/store" element={<RefurbishRes />} />
          <Route path="/Sell" element={<Sell />} />
          <Route path="/Locator" element={<EwasteLocator />} />
          <Route path="/ConditionCheck" element={<LeftArea />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
