import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";
import SearchInput from "./SearchInput.jsx";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 max-sm:h-[67%] flex flex-col'>
			<SearchInput />
			<div className="divider px-3"></div>
			<Conversations />
			<div className='divider px-3'></div>
			<LogoutButton />
		</div>
	);
};
export default Sidebar;