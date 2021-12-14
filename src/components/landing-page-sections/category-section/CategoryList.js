import React from "react";
import Category from "./Category";
import Flex from "../../flex/Flex";
import styled from "styled-components";

const CategoryList = ({ items, ...props }) => {
  return (
    <Flex wrap>
      {items.map(
        (content) =>
          content.active && (
            <Category
              key={content.id}
              image={content.image}
              title={content.title}
            />
          )
      )}
    </Flex>
  );
};

export default CategoryList;
