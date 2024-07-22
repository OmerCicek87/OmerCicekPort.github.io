import React from "react";
import GetTitle from "../../components/getTitle/GetTitle";
import projects from "../../assets/data/projects";

function Projects() {
  return (
    <div className="bg-white px-20 py-10 rounded-lg">
      <GetTitle text="PROJECTS" cls="mb-5"/>
      <div
        className="w-full h-lineheight bg-gray-200"
        style={{ height: "1px", margin: "0 auto 20px" }}
      ></div>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((item, index) => (
          <div className="" key={index}>
            <figure className="border border-gray-500 rounded-md">
              <img
                src={item.banner}
                alt={item.title}
                className="h-auto w-full object-cover border-b-2 border-b-black"
              />
              <figcaption className="p-4 font-poppins font-semibold">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

//Use slider for the projects showcase.
