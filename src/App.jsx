import  { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useState } from "react";
import { auth } from "./Firebase/firebase";
import Login from "./Components/Login";
import Register from "./Components/RegesterUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Student from "./Components/Student"
import Sidebar from "./Components/Sidebar";
function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
     <div className="App">
        {user && <Sidebar/>} {/* Sidebar shown only when user is logged in */}
        <div className={user ? "auth-content with-sidebar" : "auth-content"}>
            <Routes>
              <Route
                path="/"
                element={user ? <Navigate to="/Student" /> : <Login />}
              />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/Student" element={<Student/>} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
    
    </Router>
  );
}

export default App;