import React from "react";
import OurBlog from "./blog/OurBlog";
import Brends from "./brends/Brends";
import Campaign from "./Campaign/Campaign";
import FashionSection from "./fashion/FashionSection";
import Arrivals from "./Products/Arrivals";
import FProducts from "./Products/FProducts";
import Carousel from "./ui/Carousel";
import Categories from "./ui/Categories";

function Home() {
  return (
    <div>
      <Carousel />
      <Categories />
      <FProducts />
      <FashionSection />
      <Arrivals />
      <OurBlog />
      <Brends />
      <Campaign />
    </div>
  );
}

export default Home;
