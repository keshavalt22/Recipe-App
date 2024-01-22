import React, { useState, createContext } from "react";
import axios from "axios";
import { root_URL } from "../utils/content";

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [dish, setDish] = useState(null);

  const fetchData = () => {
    axios.get(root_URL)
      .then((res) => setRecipes(res.data.recipes))
      .catch((error) => console.log(error));
  }

  const fetchDishData = (id) => {
    axios.get(`https://dummyjson.com/recipes/${id}`)
      .then((res) => setDish(res.data))
      .catch((error) => console.log(error));
  }

  const value = {
    recipes, fetchData, fetchDishData, dish
  }
  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  )
}


export default RecipeProvider;