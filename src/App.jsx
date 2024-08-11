import { GlobalStyle } from "./components/GlobalStyle";
import Home from "./pages/Home";
import './index.css'
import { ThemeProvider } from "styled-components";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AllProject from "./components/AllProject";
function App() {
  const theme = {
    colors: {
      borderColorPrimary: "#4F228D",
      bodyBackground: "#11071F",
      btnColorPrimary: "#2C1250",
      textPrimary: "#fff",
      textSecoundary: "#7127BA",
      headingColorPrimary: "#4D4D4D",
      servicesBackground: "#693B93",
    },
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/allproject",
      element: <AllProject />
    }
  ])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
