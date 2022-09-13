
import React from "react";
import HeadBanner from "../../components/HeadBanner/HeadBanner";
import PopularDishes from "../../components/SectionOne/PopularDishes";
import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/SectionTwo/Menu";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/SectionThree/Logo";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeadBanner />
      <PopularDishes />
      <Menu />
      <Logo />
      <Footer />
    </>
  );
};

export default Home;
