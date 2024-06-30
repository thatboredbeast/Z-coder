import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = conversations.find((c) => {
      return (
        c.fullName.toLowerCase().includes(search.toLowerCase()) ||
        c.techStack.toLowerCase().includes(search.toLowerCase()) ||
        c.competetiveRating.toLowerCase().includes(search.toLowerCase()) ||
        c.favouriteLanguage.toLowerCase().includes(search.toLowerCase())
      );
    });
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("Nothing Found 😢");
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-red-700 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};
export default SearchInput;
