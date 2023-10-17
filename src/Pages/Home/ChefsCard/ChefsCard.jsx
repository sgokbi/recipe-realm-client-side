import React from "react";
import { Link } from "react-router-dom";

const ChefsCard = ({ chef }) => {
  console.log(chef);

  const { id, picture, name, experience, number_of_recipes, number_of_likes } =
    chef;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>
            Experience: <span>{experience}</span>
          </p>
          <p>
            Recipes: <span>{number_of_recipes} </span> recipes
          </p>
          <p>
            Likes: <span>{number_of_likes}</span>
          </p>
          <div className="card-actions">
            <Link to={`/chefs/${id}`}>
              <button className="btn btn-outline btn-error hover:!text-white">
                View Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsCard;
