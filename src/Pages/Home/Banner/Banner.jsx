import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto lg:px-20 px-4 py-10">
      <div className="lg:grid grid-cols-5 ">
        <div className="px-8 flex items-center justify-center col-span-2 mb-8 lg:mb-0">
          <div className="text-center">
            <h2 className=" mb-4 lg:text-5xl text-3xl text-orange-800 font-bold">
              Cooking is like love. It should be entered into with abandon or
              not at all.
            </h2>
            <p className="lg:text-xl text-base text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit tenetur eaque et incidunt aliquam excepturi illum,
              veniam consequuntur autem sapiente!
            </p>
          </div>
        </div>
        <div className="col-start-3 col-span-5">
          <figure>
            <img src="banner-2.jpg" alt="Album" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;
