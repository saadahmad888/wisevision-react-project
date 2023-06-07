import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Home from './components/home';
import Login from "./components/login";
import Signup from "./components/signup";
import ForgrtPassword from "./components/forgetPassword";
import NewPassword from "./components/newPassword";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/forget" element={<ForgrtPassword/>} />
          <Route path="/newpass" element={<NewPassword/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
