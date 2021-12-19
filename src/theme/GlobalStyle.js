import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Roboto', sans-serif;
}
.main{
    padding-top:114px;
}
.section-secondary{
  background-color: #ebf3ff;
}
} 
.breadcrumb{ 
  background-color: #ebf3ff;
  padding: 114px 150px 0 150px;
  display: flex;
  justify-content: center;
  @media (max-width: 1420px) {
    padding: 114px 50px 0 50px;
  }
  @media (max-width: 768px) {
    padding: 114px 20px 0 20px;

  }
  @media (max-width: 376px) {
    padding: 114px 10px 0 10px;

  }
}
`;
export default GlobalStyle;
