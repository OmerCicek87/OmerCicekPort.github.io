import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";

import "./index.css";

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

function App() {
  const Layout = () => {
    return (
      <div className="app flex flex-col gap-y-10 bg-black">
        <Navbar />
        <div className="flex-1">
        <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
