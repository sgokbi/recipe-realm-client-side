import React from "react";

const RecipesCard = ({ recipe }) => {
  console.log(recipe);
  const { cooking_method, rating, name } = recipe;
  return (
    <div>
      {/* NOTE FIXME  DESIGN SHOULD TO CHANGE IN FUTURE */}
      <div className="shadow-lg rounded p-8">
        <img src="" alt="" />
        <p>
          <span>Name: </span> <span>{name}</span>
        </p>
        <p>
          <span>Ingredients: </span>
        </p>
        <p>
          <span>Cooking Method:</span> <span>{cooking_method}</span>
        </p>
        <p>
          <span>Rating: </span> <span>{rating}</span>
        </p>
        <button className="btn btn-error">Favourite</button>
      </div>
    </div>
  );
};

export default RecipesCard;
