import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homescreen from "./Screen/Homescreen";
import Header from "./Component/Header";
import LoginScreen from "./Screen/LoginScreen";
import Dashboard from "./Screen/Dashboard";
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path='/' element={<Homescreen />} />
          <Route exact path='/login' element={<LoginScreen />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
