import React from "react";

const Banner = () => {
  return (
    <div className="py-10">
      <div className="lg:grid grid-cols-5 ">
        <div className="px-8 flex items-center justify-center col-span-2 mb-8 lg:mb-0">
          <div className="text-center">
            <h2 className=" mb-4 lg:text-4xl text-3xl text-orange-800 font-bold">
              Cooking is like love. It should be entered into with abandon or
              not at all.
            </h2>
            <p className="lg:text-xl text-base text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit tenetur eaque et incidunt aliquam excepturi illum,
              veniam consequuntur autem sapiente!
            </p>
            <button className="btn btn-outline btn-error mt-4 hover:!text-white">
              Join our community
            </button>
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
