/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import TopHeadlines from "../../api/TopHeadlines";
import imagenotavailable from "../../assets/Image_not_available.png";
import "../../styles/scroll.css";

function LeftDash() {
  const headlines = useQuery({
    queryKey: ["headlines"],
    queryFn: () => TopHeadlines(),
  });
  console.log(headlines);
  return (
    <main>
      <div
        className="hidden lg:block lg:h-[68vh] lg:w-[25vw] lg:border-black lg:border-2 lg:border-solid overflow-hidden"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <h1 className="text-2xl pt-2 pl-2 font-serif">Markets</h1>
        <div className="w-max max-w-[21rem] max-h-[29rem] p-2 pr-4 overflow-y-auto custom-scrollbar overflow-hidden">
          {headlines.isLoading && (
            <div className="flex gap-2 h-[20rem] w-[20rem] justify-center items-center ">
              <div className="w-4 h-4 rounded-full bg-white animate-bounce"></div>
              <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.5s]"></div>
            </div>
          )}
          {!headlines.isLoading &&
            headlines.data.map((news) => (
              <div
                className="flex gap-4 mb-4 cursor-pointer items-center hover:underline"
                key={news.article_id}
              >
                {news.image_url ? (
                  <img
                    src={news.image_url}
                    alt="news-url"
                    className="w-16 h-16"
                  />
                ) : (
                  <img
                    src={imagenotavailable}
                    alt="Image_not_available"
                    className="w-16 h-16"
                  />
                )}

                <Link to={news.Link}>
                  {" "}
                  <h1 className="text-sm font-semibold">{news.title}</h1>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}

export default LeftDash;
