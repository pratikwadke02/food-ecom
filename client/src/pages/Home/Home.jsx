
import React from "react";
import HeadBanner from "../../components/HeadBanner/HeadBanner";
import PopularDishes from "../../components/SectionOne/PopularDishes";
import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/SectionTwo/Menu";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeadBanner />
      <PopularDishes />
      <Menu />
    </>
  );
};

export default Home;
