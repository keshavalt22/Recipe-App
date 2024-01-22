import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Spinner from "./spinner";
import { RecipeContext } from "../context/Recipes";

function Dish(props) {
  const data = useContext(RecipeContext);
  const { id } = useParams();

  const { fetchDishData, dish } = data;

  useEffect(() => {
    fetchDishData(id)
  }, [id])

  console.log(dish);

  if (!dish) {
    return (
      <section className="dish">
        <div className="dish-box">
          <Spinner />
        </div>
      </section>
    )
  }

  let { ingredients, instructions } = dish;
  // console.log(instructions, ingredients)
  return (
    <section className="dish">
      <div className="dish-box">
        <div className="dish-img">
          <img src={dish.image} alt={dish.name} />
        </div>
        <div className="dish-text">
          <h2>{dish.name}</h2>
          <p><strong>Cuisine:</strong> {dish.cuisine}</p>
          <p><strong>Difficulty Level:</strong> {dish.difficulty}</p>
          <p><strong>CaloriesPerServing:</strong> {dish.caloriesPerServing}</p>
          <p><strong>PrepTimeMinutes:</strong> {dish.prepTimeMinutes}</p>
          <p><strong>Ingredients:</strong> {
            ingredients.map((ingredient) => {
              return <span>{`${ingredient}, `}</span>
            })
          }</p>
          <p><strong>Instructions:</strong> <ul>{
            instructions.map((instruction) => {
              return <li>{instruction}</li>
            })
          }</ul></p>
        </div>
      </div>
    </section>
  )
}

export default Dish;