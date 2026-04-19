import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Portfolio } from "./components/pages/Portfolio";
import { Contact } from "./components/pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "portfolio", Component: Portfolio },
      { path: "contact", Component: Contact },
    ],
  },
]);
