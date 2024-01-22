import { useContext } from "react";
import { RecipeContext } from "../context/Recipes";
import Recipe from "./Recipe";

function Recipes() {
  const { recipes } = useContext(RecipeContext);

  return (
    <section className="recipes" id="recipes">
      <div className="recipes-heading">
        <p>Cosmic Culinary</p>
        <h2>Elevate Your Recipes</h2>
        <p className="dull">A recipe is a story that begins with fresh ingredients and ends with a delighted palate.</p>
      </div>
      <div className="recipes-box">
        {
          recipes.map((recipe) => {
            return <Recipe key={recipe.id} {...recipe}
            />
          })
        }
      </div>
    </section>
  )
}

export default Recipes;