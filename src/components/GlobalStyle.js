import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Global Css start */
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --border-color-primary: #4F228D;
  --body-background: #11071F;
  --btn-color-primary: #2C1250;
  --text-primary: #fff;
  --text-secoundary: #7127BA;
  --heading-color-primary: #4D4D4D;

}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 96%;
}

body {
  background-color: var(--body-background);
  color: var(--text-primary);
  font-size: 16px;
  font-family: "Inter", sans-serif;
}

html {
  scroll-behavior: smooth;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  text-decoration: none;
  color: var(--text-primary);

}
.section-heading h1{
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.textSecoundary};
    margin-bottom: 10px;
}
img{
    width: 100%;
    height: auto;
}
.hero-btn{
  padding: 20px 80px !important;
  margin-top: 3rem;
}
.flex{
  display: flex;
}
.justify-between{
  justify-content: space-between;
}
.justify-center{
  justify-content: center;
}
.items-center{
  align-items: center;
}
.element{
          position: relative;
        }
        .element::after {
          content: "";
          position: absolute;
          left: -20px;
          bottom: -5px;
          display:inline-block;
          width: 100%;
          background-repeat: no-repeat;
          height: 30px;
          background-image: url('./assets/images/element.svg');
        }
button{
  cursor: pointer;
}
/* Global Css end*/
`;

export { GlobalStyle };
