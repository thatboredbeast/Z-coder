import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [choice, setChoice] = useState("");
  console.log(choice);
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-1">
          <Link to="/chats">
            {
              <div
                className="flex items-center justify-center h-[20vh] w-[20vw] rounded-lg overflow-auto bg-gray-200 text-gray-200 hover:bg-red-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 m-4"
                onClick={() => setChoice("chatRoom")}
              >
                Chats
              </div>
            }
          </Link>
        </div>
      </div>
      <div className="flex flex-1">
        <Link to="/posts">
          <div
            className="flex items-center justify-center h-[20vh] w-[20vw] rounded-lg overflow-auto bg-gray-200 text-gray-200 hover:bg-red-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 m-4"
            onClick={() => setChoice("postRoom")}
          >
            Posts
          </div>
        </Link>
      </div>
    </>
  );
};
export default Home;
