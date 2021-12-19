import React from "react";
import styled from "styled-components";
import AccordionItems from "../accordion/AccordionItems";
import Participating from "../participating";
import Container from "../container";
const AboutAuctionStyle = styled.div`
  main {
    display: flex;
  }
  aside {
    margin-right: 20px;

    > div {
      border-radius: 3px;
      padding: 40px 20px;
      background-color: #ebf3ff;
      width: 400px;
    }
  }
  @media (max-width: 1024px) {
    main {
      display: flex;
      flex-direction: column;
    }
    aside {
      margin-right: 0;
      width: 100%;
      > div {
        width: 100%;
      }
    }
  }
`;

const AboutAuction = () => {
  return (
    <Container>
      <AboutAuctionStyle>
        <main>
          <aside>
            <AccordionItems />
          </aside>
          <section>
            <Participating />
          </section>
        </main>
      </AboutAuctionStyle>
    </Container>
  );
};

export default AboutAuction;
