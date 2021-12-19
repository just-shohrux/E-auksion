import React from "react";
import Search from "../../../components/sections/search";
import Categories from "../../../components/sections/categories";
import Lots from "../../../components/sections/lots";
import Statistics from "../../../components/sections/statistics";
import Payments from "../../../components/sections/payments/Payments";

const HomeContainer = () => {
  return (
    <main className="main">
      <Search />
      <Categories />
      <Lots />
      <Statistics />
      <Payments />
    </main>
  );
};

export default HomeContainer;
