/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import imagenotavailable from "../../assets/Image_not_available.png";

function SearchResults({ results }) {
  if (results.length === 0) {
    return (
      <div className="flex flex-col  items-start p-4 md:p-0">
        <h1 className="mt-4 md:ml-20  font-thin font-serif text-4xl">
          No Search Results for this input
        </h1>
        <Link to="/" className="font-serif hover:underline md:ml-20 mt-4 ">
          Go to Homepage
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 w-full h-max ">
      <h1 className="self-start justify-self-center md:mt-0 mt-4 md:ml-20 ml-4 font-thin font-serif text-4xl">
        Showing results
      </h1>
      <div className="w-full h-[70vh] border-2 border-black border-solid flex justify-center overflow-hidden self-center justify-self-center">
        <div className=" h-full p-4 overflow-y-auto custom-scrollbar">
          {results.map((post) => (
            <div
              key={post.article_id}
              className=" flex flex-col lg:flex-row  mb-4 border-2 border-black border-solid rounded-2xl box shadow-lg font-PTserif "
            >
              {post.image_url ? (
                <img
                  src={post.image_url}
                  alt="news"
                  className="w-[20rem] h-[15rem] md:w-40 md:h-40 p-2 rounded-2xl"
                />
              ) : (
                <>
                  <img
                    src={imagenotavailable}
                    alt="Image_not_available"
                    className="w-40 h-40 p-2 rounded-2xl"
                  />
                </>
              )}
              <div className="flex flex-col gap-4 p-4">
                <h1 className="font-semibold text-xl hover:underline cursor-pointer">
                  {post.title}
                </h1>
                <p className="text-sm">{post.description}</p>

                <p className="text-xs flex justify-start items-center">
                  <sub className="text-xs mr-8">{post.source_id}</sub>
                  {post.pubDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
