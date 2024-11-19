import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TeamSelection from "./Pages/TeamSelection";
import RouteProtector from "./Components/RouteProtector";
import { useEffect } from "react";
import useStore from "./zustand/store";
import HomeRedirect from "./Components/HomeRedirect";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Battle from "./Pages/Battle";

//import { moves } from "./data/pokemonData";

function App() {
  const { checkAuth } = useStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Router>
      <Header />
      <Battle />
      {/* <Routes>
        <Route
          path="/"
          element={
            <RouteProtector>
              <Home />
            </RouteProtector>
          }
        />
        <Route
          path="/team-selection"
          element={
            <RouteProtector>
              <TeamSelection />{" "}
            </RouteProtector>
          }
        />
        <Route
          path="/login"
          element={
            <HomeRedirect>
              <Login />
            </HomeRedirect>
          }
        />
        <Route
          path="/signup"
          element={
            <HomeRedirect>
              <Signup />{" "}
            </HomeRedirect>
          }
        />
      </Routes> */}
    </Router>
  );
}

export default App;
