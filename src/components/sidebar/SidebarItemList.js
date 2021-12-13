import React from "react";
import SidebarItem from "./SidebarItem";
import categories from "../../mock/category-content";
import styled from "styled-components";

const SidebarItemList = () => {
  return (
    <div>
      {categories.map((content) => (
        <SidebarItem
          id={content.id}
          image={content.image}
          title={content.title}
        />
      ))}
    </div>
  );
};

export default SidebarItemList;
