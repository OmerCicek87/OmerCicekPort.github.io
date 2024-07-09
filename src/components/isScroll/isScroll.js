import { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";

export default function useScr() {
  const { y } = useWindowScroll();
  const [scrdir, setScrdir] = useState(true);
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updScr = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? false : true;
      if (
        direction !== scrdir &&
        (scrollY - lastScrollY > 1 || scrollY - lastScrollY < -1)
      )
        setScrdir(direction);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updScr);
    return () => {
      window.removeEventListener("scroll", updScr);
    };
  }, [scrdir]);
  return scrdir && y > 50 ? true : false;
}