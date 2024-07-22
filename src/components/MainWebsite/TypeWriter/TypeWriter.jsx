import { ReactTyped } from "react-typed";

const TypeWriter = () => {
  return (
    <div className="hero">
      <div className="flex justify-center h-96 bg-white items-center rounded-md">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-helvatica font-bold text-5xl">
            I'm a{" "}
            <ReactTyped
              strings={[
                "Student...",
                "Web Developer...",
                "Software Engineer...",
              ]}
              typeSpeed={100}
              loop
              backSpeed={20}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TypeWriter;
