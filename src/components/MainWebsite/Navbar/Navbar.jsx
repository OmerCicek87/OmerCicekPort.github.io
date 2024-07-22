import { useEffect, useState } from 'react';
import useScr from '../../isScroll/isScroll';

const Navbar = ({ aboutRef, blogRef, contactRef, projectRef }) => {
  const [navbarColor, setNavbarColor] = useState('bg-transparent');
  const [textColor, setTextColor] = useState('text-white');
  const scrolled = useScr();

  //#region Card References
  const handleClickAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickBlog = () => {
    blogRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  //#endregion

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarColor('bg-[#F7F9F2]');
        setTextColor('text-black');
      } else {
        setNavbarColor('bg-transparent');
        setTextColor('text-white');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled ? 'top-0 shadow-md' : '-top-40'
      } sticky z-999 flex justify-between items-center text-center w-full p-5 transition-all duration-700 ${navbarColor} ${textColor}`}
    >
      <h1 className=" text-3xl font-extrabold">
        Bekir <i>Omer</i> Cicek
      </h1>
      <div className="flex gap-5 text-lg font-bold">
        <button onClick={handleClickAbout} className="p-4 rounded-xl">About</button>
        <button onClick={handleClickBlog} className="p-4 rounded-xl">Blog</button>
        <button onClick={handleClickProjects} className="p-4 rounded-xl">Projects</button>
        <button onClick={handleClickContact} className="p-4 rounded-xl">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
