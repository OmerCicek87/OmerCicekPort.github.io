import GetTitle from "../../components/getTitle/GetTitle";

const About = () => {
  const logos = [
    { title: "react logo", src: "/react_logo.png" },
    { title: "js logo", src: "/js.png" },
    { title: "html logo", src: "/html-5.png" },
    { title: "css logo", src: "/css-3.png" },
    { title: "tailwind logo", src: "/tailwind.png" },
    { title: "csharp logo", src: "/csharp-logo.png" },
    { title: "postgresql logo", src: "/postgre-logo.png" },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="w-full bg-white rounded-lg overflow-hidden">
        <div className="flex flex-col">
          <div className="flex w-full bg-white justify-center items-center p-5">
            <GetTitle text="ABOUT"/>
          </div>
          <div className="w-full h-lineheight bg-gray-200"></div>
          <div className="flex justify-center p-5">
            <div className="container">
              <div className="flex flex-col h-full">
                <div>
                  <h2 className="text-4xl font-semibold text-center p-3 pb-5">
                    My Tech Stack
                  </h2>
                </div>
                <div className="flex justify-center items-center flex-wrap flex-1 gap-3">
                  {logos.map((item,index)=>
                    (
                      <img
                      src={item.src}
                      alt={item.title}
                      className="w-28 h-28"
                      key={index}
                    />
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="h-auto  bg-gray-900 border w-[10px]"></div>
            <div className="container">
              <h2 className="text-4xl font-semibold text-center p-3 pb-5">
                Introduction
              </h2>
              <p className="font-poppins font-semibold  text-xl">
                Hi there! I'm Bekir Ömer Çiçek, living in Poznan, Poland,
                yet I was born and raised in the beautiful Turkish city of
                Istanbul.
                <br />
                <br />
                I'm a third-year computer science student who has always been
                fascinated by the complexities of computer science and
                programming. My curiosity about how things function keeps me
                motivated to learn more. I'm passionate about a lot of different
                things, like databases, software engineering, and web
                development. Furthermore, I am more interested in cars and
                automative industry.
                <br />
                <br />
                I have a strong desire to develop original solutions and
                keep learning more about these subjects. Welcome to my
                portfolio, where I present my work, my blog and technological
                adventures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;