import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefsCard from "../ChefsCard/ChefsCard";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch(
      "https://recipe-realm-server-hjmld5v6v-sagorikas-projects.vercel.app/chefs"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setChefs(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="py-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center">
        {chefs.map((chef) => (
          <ChefsCard key={chef.id} chef={chef}></ChefsCard>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
