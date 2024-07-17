import CreatePost from "../../components/posts/CreatePost";
import Posts from "../../components/posts/Posts";
import { useState } from "react";

const PostSection = () => {
  const [feedType, setFeedType] = useState("forYou");
  return (
    <>
      <div className="flex-[4_4_0] m-auto rounded-lg h-[90vh] w-[90vw]  bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 overflow-auto">
        {/* Header */}
        <div className="flex w-full border-b border-gray-700 overflow-auto">
          <div
            className={
              "flex justify-center flex-1 p-3 hover:bg-red-600 transition duration-300 cursor-pointer relative text-gray-200"
            }
            onClick={() => setFeedType("forYou")}
          >
            My Posts
            {feedType === "forYou" && (
              <div className="absolute bottom-0 w-10  h-1 rounded-full bg-gray-200"></div>
            )}
          </div>
          <div
            className={
              "flex justify-center flex-1 p-3 hover:bg-red-600 transition duration-300 cursor-pointer relative text-gray-200"
            }
            onClick={() => setFeedType("All")}
          >
            All Posts
            {feedType === "All" && (
              <div className="absolute bottom-0 w-10  h-1 rounded-full bg-gray-200"></div>
            )}
          </div>
        </div>
        {/* CREATE POST INPUT  */}
        <div>
          <CreatePost />
        </div>
        <div>
          <Posts feedType={feedType} />
        </div>
      </div>
    </>
  );
};

export default PostSection;
