import React from 'react';
import { useOutletContext } from 'react-router-dom';
import TypeWriter from '../../components/MainWebsite/TypeWriter/TypeWriter';
import About from '../About/About';
import Contact from '../Contact/Contact';
import BlogPost from '../../components/BlogPart/BlogPost/BlogPost';
import Projects from '../Projects/Projects';

const Home = () => {
  const { aboutRef, blogRef, contactRef, projectRef } = useOutletContext();

  return (
    <div className="home">
      <div className="container">
        <div className="flex flex-col flex-grow p-5 bg-black gap-20">
          <div className="hero type-writer">
            <TypeWriter />
          </div>
          <div className="about-me" ref={aboutRef}>
            <About />
          </div>
          <div className="blogs" ref={blogRef}>
            <BlogPost />
          </div>
          <div className="my-projects" ref={projectRef}>
            <Projects />
          </div>
          <div className="contact-card" ref={contactRef}>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
