import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex max-sm:h-[100%] max-sm:flex-col sm:h-[70%] md:h-[70%] rounded-lg overflow-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0">
      <Sidebar className="flex-1 " />
      <MessageContainer className="flex-1 " />
    </div>
  );
};
export default Home;
