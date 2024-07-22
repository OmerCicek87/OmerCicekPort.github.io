import React, { useRef } from "react";
import Navbar from "./components/MainWebsite/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/MainWebsite/Footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";

function App() {
  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const Layout = () => {
    return (
      <div className="app flex flex-col gap-y-10 bg-black">
        <Navbar
          aboutRef={aboutRef}
          blogRef={blogRef}
          contactRef={contactRef}
          projectRef={projectRef}
        />
        <div className="flex-1">
          <Outlet context={{ aboutRef, blogRef, projectRef, contactRef }} />
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          aboutRef={aboutRef}
          blogRef={blogRef}
          projectRef={projectRef}
          contactRef={contactRef}
        />
      ),
      children: [
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
