import React from "react";
import { useLoaderData } from "react-router-dom";
import chefPic from "../../../public/chef-3.jpg";
import RecipesCard from "../RecipesCard/RecipesCard";

const ChefsDetails = () => {
  const chef = useLoaderData();
  console.log(chef);
  const {
    name,
    picture,
    bio,
    experience,
    number_of_likes,
    number_of_recipes,
    recipes,
  } = chef;
  return (
    <div>
      {/* ========= BANNER ======= */}
      <div className="text-center mb-8 bg-orange-500 py-16">
        <h1 className="lg:text-5xl text-2xl w-5/6 mx-auto text-white">
          " A Recipe has no soul, You, as the cook, must bring soul to the
          recipe"
        </h1>
      </div>

      <div className="container mx-auto lg:px-20 px-4 my-10 grid lg:grid-cols-2 gap-4">
        <div className=" grid justify-center">
          {/* NOTE FIXME  */}
          <img className="object-fit w-fit" src={chefPic} alt="" />
        </div>

        <div className="grid justify-center items-center">
          <div>
            <h1 className="text-3xl font-semibold text-orange-800 mb-4">
              {name}
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold"> Experience: </span> {experience}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Bio: </span>
              {bio}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Recipes:</span>
              {number_of_recipes} recipes
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold"> Likes: </span> {number_of_likes}
            </p>
          </div>
        </div>
      </div>

      {/* ========= RECIPES ======= */}
      <div className="container mx-auto lg:px-20 px-4 my-10">
        <h1 className="text-center text-3xl">Recipes</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 ">
          {recipes.map((recipe, i) => (
            <RecipesCard key={i} recipe={recipe}></RecipesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefsDetails;
