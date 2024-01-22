import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../context/Recipes";

function Header() {
  const [istrue, setIsTrue] = useState(true);
  const [dishes, setDishes] = useState("");
  const [dish, setDish] = useState("");
  const { recipes } = useContext(RecipeContext);
  let recipe = recipes.map((recipe) => recipe.name);


  const handleClick = () => {
    (istrue == true) ? setIsTrue(false) : setIsTrue(true)
    setDish("")
  }

  const handleChange = (e) => {
    let item = e.target.value;
    setDishes(item);

    const dish = recipes.filter((items) => {
      return items.name.toLowerCase().includes(dishes.toLowerCase())
    })

    setDish(dish);
  }

  return (
    <div className="header">
      <nav className="header_nav">
        <div className="logo">
          <p><strong>FOODBITES</strong></p>
          <p className="line">FOOD STORM </p>
        </div>
        <ul className="nav">
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#recipes">Recipes</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="flex search">
          <input type="text"
            onChange={handleChange}
            value={dishes}
            className={istrue == true ? "display-none" : "display"}
            placeholder="Type Dish"
          />
          <span onClick={handleClick}><FaSearch /></span>
        </div>
        {(dish) ? <div className="searchItems">
          <ul>{
            dish.map((elm) => {
              return <NavLink to={`/dish/${elm.id}`}><li key={elm.id}>
                <div className="dishname">
                  <img src={elm.image} alt={elm.id} />
                  <p>{elm.name}</p>
                </div>
              </li></NavLink>
            })
          }</ul>
        </div> : ""}
      </nav>
    </div>
  )
}


export default Header;


