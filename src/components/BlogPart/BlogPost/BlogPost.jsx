import blogPosts from "../../../assets/data/blog.js";
import GetTitle from "../../getTitle/GetTitle.jsx";

const BlogPost = () => {
  return (
    <div className="bg-white px-20 py-10 rounded-lg">
      <GetTitle text="BLOG POSTS" cls="mb-5" />
      <div
        className="w-full h-lineheight bg-gray-200"
        style={{ height: "1px", margin: "0 auto 20px" }}
      ></div>
      <div className="grid grid-cols-3 gap-4">
        {blogPosts.map((item, index) => (
          <div className="border border-gray-500 rounded-md" key={index}>
            <figure>
              <img
                src={item.img}
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
};

export default BlogPost;
