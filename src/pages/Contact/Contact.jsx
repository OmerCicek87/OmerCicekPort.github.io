import GetTitle from "../../components/getTitle/GetTitle";

const Contact = () => {
  return (
    <>
      <div className="w-full bg-white rounded-lg overflow-hidden">
        <div className="flex">
          <div className="flex flex-col justify-center items-center flex-1 p-5">
            <div className="flex justify-center items-center">
              <GetTitle text="CONTACT" />
            </div>
            <div className="w-full h-lineheight m-4 bg-gray-200"></div>
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full bg-slate-200 text-gray-700 border rounded py-3 px-4  focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    className="appearance-none block w-full bg-slate-200 text-gray-700 border rounded py-3 px-4  focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mb-6">
                <input
                  className="appearance-none block w-full bg-slate-200 text-gray-700 border rounded py-3 px-4  focus:outline-none focus:bg-white"
                  type="email"
                  placeholder="E-mail"
                />
              </div>
              <div className="mb-6">
                <textarea
                  className="appearance-none block w-full bg-slate-200 text-gray-700 border rounded py-3 px-4  focus:outline-none focus:bg-white"
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
        </div>
      </div>
    </>
  );
};

export default Contact;
