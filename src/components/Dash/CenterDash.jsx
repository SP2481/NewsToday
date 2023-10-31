import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Fetchnews from "../../api/Fetchnews";
import imagenotavailable from "../../assets/Image_not_available.png";
import "../../styles/scroll.css";

function CenterDash({ category }) {
  const headlines = useQuery({
    queryKey: ["todaysnews", category],
    queryFn: () => Fetchnews(category),
  });

  return (
    <div className="w-screen h-full lg:h-[68vh] lg:w-[60vw] lg:border-2 lg:border-white lg:border-solid lg:shadow-sm flex flex-col items-start p-4 lg:p-0 ">
      <h1 className="text-2xl lg:p-2 mb-2 lg:mb-0 font-serif">
        Todays Affairs
      </h1>

      <div
        className="w-full max-h-[22.5rem] lg:max-h-[28rem] sm:max-h-[70vh] lg:p-2 overflow-y-auto custom-scrollbar relative overflow-hidden"
        data-aos="zoom-in-up"
        data-aos-delay="100"
      >
        {headlines.isLoading && (
          <div className="flex gap-2 h-[60vh] w-[60vw] justify-center items-center ">
            <div className="w-4 h-4 rounded-full bg-white animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.5s]"></div>
          </div>
        )}
        {!headlines.isLoading &&
          headlines.data.map((news) => (
            <div
              className="flex flex-col  lg:flex-row lg:gap-4 mb-4 cursor-pointer lg:items-center font-PTserif"
              key={news.article_id}
            >
              {news.image_url ? (
                <img
                  src={news.image_url}
                  alt="news-url"
                  className="w-36 h-28"
                />
              ) : (
                <>
                  <img
                    src={imagenotavailable}
                    alt="Image_not_available"
                    className="w-36 h-28"
                  />
                </>
              )}

              <div>
                <h1 className="text-lg font-semibold hover:underline">
                  {news.title}
                </h1>
                <p className="text-sm font-normal ">
                  {news.description && news.description.slice(0, 100)}
                  <Link to={news.link}>
                    {" "}
                    <span className=" underline hover:text-blue-600 ml-2">
                      Read full article
                    </span>{" "}
                  </Link>
                </p>

                <sub className=" text-xs">{news.source_id}</sub>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CenterDash;
