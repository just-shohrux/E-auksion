import React from "react";
import styled from "styled-components";
import SidebarItems from "./SidebarItems";

const SidebarStyle = styled.div`
  width: 400px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  @media screen and (max-width: 1600px) {
    width: 100%;
  }
`;

const Sidebar = () => {
  return (
    <SidebarStyle>
      <SidebarItems />
    </SidebarStyle>
  );
};

export default Sidebar;
