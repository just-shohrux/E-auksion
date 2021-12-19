import React, { useState } from "react";
import CategoryList from "./CategoryList";
import categories from "../../../mock/category-content";
import Button from "../../button/Button";
import Container from "../../container/Container";
import Flex from "../../flex/Flex";
import Title from "../../title/Title";

const Categories = (props) => {
  let [items, setItems] = useState(categories);
  const [changeText, setChangeText] = useState(true);

  const showCategoryHandler = () => {
    items = items.map((item, index) =>
      index > 5
        ? {
            ...item,
            active: !item.active,
          }
        : { ...item }
    );
    setItems(items);
    setChangeText((changeText) => !changeText);
  };

  return (
    <Container>
      <section>
        <Flex justify column>
          <Title>MULK TURLARI</Title>
          <CategoryList items={items} />
          <Button onClick={showCategoryHandler}>
            {changeText ? "Barchasini ko'rish" : "Yopish"}
          </Button>
        </Flex>
      </section>
    </Container>
  );
};

export default Categories;
