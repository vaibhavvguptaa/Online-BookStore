import TopSellers from "./TopSellers";
import Banner from "./Banner";
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
