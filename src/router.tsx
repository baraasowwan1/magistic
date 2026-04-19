import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Portfolio } from "./components/pages/Portfolio";
import { Contact } from "./components/pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
