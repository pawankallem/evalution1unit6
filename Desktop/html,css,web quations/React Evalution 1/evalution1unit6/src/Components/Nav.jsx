import { Link } from "react-router-dom";
import "./GetCities.css"

export const Nav = () => {
  return (
    <div className="navCss">
        <Link to={"/"} > Home </Link>
      <Link to={"/add-city"}> Add City </Link>
      <Link to={"/add-country"}> Add Country </Link>
    </div>
  );
};
