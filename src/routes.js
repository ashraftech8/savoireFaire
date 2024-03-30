import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import App from "./App";
import LandingPages from "./pages/LandingPages";
import { ParallaxProvider } from "react-scroll-parallax";
const AboutWithParallax = () => (
  <ParallaxProvider>
    <About />
  </ParallaxProvider>
);
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutWithParallax />,
  },
]);
