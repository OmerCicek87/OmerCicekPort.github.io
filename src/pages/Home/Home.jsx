import TypeWriter from "../../components/TypeWriter/TypeWriter";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="flex flex-col flex-grow p-5 bg-black gap-20">
          <div className="flex justify-center h-96 bg-white items-center rounded-md">
            <TypeWriter />
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full bg-white rounded-lg overflow-hidden">
              <div className="flex flex-col">
                <div className="flex w-full bg-white justify-center items-center p-5">
                  <h2 className="text-5xl font-extrabold">ABOUT</h2>
                </div>
                <div className="w-full h-lineheight bg-gray-200"></div>
                <div className="flex justify-center p-5">
                    <div className="container">
                      <h2 className="text-4xl font-semibold text-center p-3 pb-5">My Tech Stack</h2>
                      <div className="flex flex-wrap gap-3">
                        <img src="../../../public/react_logo.png" alt="React logo" className="w-28 h-28"/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" alt="C# logo" className="w-36 h-36"/>
                        <img src="../../../public/js.png" alt="JavaScript logo" className="w-28 h-28"/>
                        <img src="../../../public/react_logo.png" alt="HTML logo" className="w-28 h-28"/>
                        <img src="../../../public/react_logo.png" alt="CSS logo" className="w-28 h-28"/>

                      </div>
                    </div>
                    <div className="h-[400px]  bg-gray-900 border w-[10px]"></div>
                    <div className="container">
                      <h2 className="text-4xl font-semibold text-center p-3 pb-5">Introduction</h2>
                      <p className="font-cormorant font-semibold text-xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Mollitia reprehenderit ipsa neque necessitatibus perferendis architecto deserunt, non cupiditate beatae, 
                        laudantium ratione adipisci odit itaque animi aliquid quo quae dolores eaque.
                      </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="w-full bg-white bg-opacity-90 rounded-lg overflow-hidden">
              <div className="flex">
                <div className="flex justify-center items-center flex-1 w-2/3 p-5">
                  <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input
                          className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4  focus:outline-none focus:bg-white"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <input
                          className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4  focus:outline-none focus:bg-white"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4  focus:outline-none focus:bg-white"
                        type="email"
                        placeholder="E-mail"
                      />
                    </div>
                    <div className="mb-6">
                      <textarea
                        className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4  focus:outline-none focus:bg-white"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="flex justify-center">
                      <button
                        className="bg-black text-white font-bold py-2 px-4 rounded"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div className="flex w-1/3 bg-white justify-center items-center">
                  <h2 className="text-4xl font-extrabold">CONTACT</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


/*

                  <div className="text-lg">
                    I was born in Istanbul, Turkey, and currently, I am pursuing
                    my studies in Computer Science at Poznan WSB Merito
                    University. My passion for continuous learning drives me to
                    improve my skillset through problem-solving, project
                    development, and constant information research. I am
                    particularly enthusiastic about exploring various domains
                    within Computer Science, with a strong focus on expanding my
                    expertise in Software Engineering and Web Development.
                  </div>

                    My skillset:
                    <ul className="list-disc ml-5">
                      <li>C#</li>
                      <li>React</li>
                      <li>JavaScript</li>
                      <li>CSS</li>
                      <li>HTML</li>
                      <li>Atlassian Forge</li>
                      <li>Atlassian Products</li>
                    </ul>
                    <br />
                    My interests:
                    <ul className="list-disc ml-5">
                      <li>Software Development</li>
                      <li>Web Development</li>
                      <li>Artificial Intelligence</li>
                    </ul>
*/