import React from "react";
import TopSellers from "./TopSellers";
import Banner from "./banner";
import Recommended from "./Recommended";
import News from "./News";


const home = () => {
  return (
    <>
      <Banner />
      <TopSellers />
      <Recommended />
      <News />
    </>
  );
};

export default home;
