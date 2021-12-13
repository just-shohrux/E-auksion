import React from "react";

import Lots from "../../../components/landing-page-sections/lot-section/Lots";
import Search from "../../../components/landing-page-sections/search-section/Search";
import Categories from "../../../components/landing-page-sections/category-section/Categories";
import Statistics from "../../../components/landing-page-sections/statistic-section/Statistics";
import Payments from "../../../components/landing-page-sections/payment-section/Payments";

const HomeContainer = () => {
    return (
        <main
            style={{
                paddingTop: "114px",
            }}
        >
            <Search />
            <Categories />
            <Lots />
            <Statistics />
            <Payments />
        </main>
    );
};

export default HomeContainer;
