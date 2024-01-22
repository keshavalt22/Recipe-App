import { Link } from "react-router-dom";

function Recipe(props) {
  return (
    <>
      <div className="recipe-box">
        <h3>{props.name}</h3>
        <div className="recipe-flex">
          <img src={props.image} alt={props.name} />
          <div className="recipe-text">
            <p>Cuisine: {props.cuisine}</p>
            <p>Rating Out Of 5: {props.rating}</p>
            <p>prepTimeMinutes: {props.prepTimeMinutes}</p>
            <p>caloriesPerServing: {props.caloriesPerServing}</p>
            <Link to={`/dish/${props.id}`}>
              <button
                className="recipe-btn"
              >MORE INFO</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recipe;