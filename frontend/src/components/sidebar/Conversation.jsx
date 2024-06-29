import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-red-700 rounded p-2 py-2 cursor-pointer
        ${isSelected ? "bg-red-700" : ""}
        `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online":""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user-avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div>
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span >{conversation.favouriteLanguage}</span>,
            <span > {conversation.techStack}</span>,
            <span className="text-green-500"> {conversation.competetiveRating}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
