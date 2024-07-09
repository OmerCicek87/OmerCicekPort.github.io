import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useScr from "../isScroll/isScroll";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");
  const scrolled = useScr();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarColor("bg-[#F7F9F2]");
        setTextColor("text-black");
      } else {
        setNavbarColor("bg-transparent");
        setTextColor("text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "top-0 shadow-md" : "-top-40"
      } sticky z-999 flex justify-between items-center text-center w-full p-5 transition-all duration-700 ${navbarColor} ${textColor}`}
    >
      <h1 className=" text-3xl font-extrabold">
        Bekir <i>Omer</i> Cicek
      </h1>
      <div className="flex gap-5 text-lg font-bold">
        <Link className="p-4 rounded-xl">Contact</Link>
        <Link className="p-4 rounded-xl">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;

// bg-[#F4DFC8]
