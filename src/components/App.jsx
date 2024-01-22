import "../assets/stylesheet/style.css"
import AboutPage from "./AboutPage";
import Dish from "./Dish";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import { useEffect, useContext } from "react";
import { RecipeContext } from "../context/Recipes";

function App() {
  const data = useContext(RecipeContext);

  const { recipes, fetchData } = data;

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="body">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
        <Route
          path="/dish/:id"
          element={<Dish />}
        />
      </Routes>
      <Contact />
    </div>
  )
}



export default App


