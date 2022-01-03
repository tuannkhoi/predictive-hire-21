import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import RoutesComponent from "./Routes";

export default function App() {
  return (
    <Router>
      <Navbar />
      <RoutesComponent />
    </Router>
  );
}
