import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./routes/Home";
import Services from "./routes/Services";
import Contact from "./routes/Contact";
import About from "./routes/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/Contact",
        element: <Contact />
      }
    ]
  }
]);

export default routes;