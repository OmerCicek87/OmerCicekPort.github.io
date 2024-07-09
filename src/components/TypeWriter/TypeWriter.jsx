import { ReactTyped } from "react-typed";

const TypeWriter = () => {
  return (
    <div className="hero">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-helvatica font-bold text-5xl">
          I'm a{" "}
          <ReactTyped
            strings={[
              "Student...", 
              "Web Developer...", 
              "Software Engineer...",
              ", wait whoami..?"
            ]}
            typeSpeed={100}
            loop
            backSpeed={20}
          />
        </h1>
      </div>
    </div>
  );
};

export default TypeWriter;
