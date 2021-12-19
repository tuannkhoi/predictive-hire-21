import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './Routes';

export default function App() {
  return (
    <Router>
      <Navbar />
      <RoutesComponent />
    </Router>
  );
}
