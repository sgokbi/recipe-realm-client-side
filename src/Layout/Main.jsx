import React from "react";
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar";
import Footer from "../Pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import Chefs from "../Pages/Home/Chefs/Chefs";
import Banner from "../Pages/Home/Banner/Banner";
import { Container } from "postcss";

const Main = () => {
  return (
    <div className="">
      <NavigationBar />

      <Outlet />
      <div className="container mx-auto lg:px-20 px-4 my-10">
        <Banner />
        <Chefs />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
