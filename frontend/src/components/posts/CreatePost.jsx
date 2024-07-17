// import { CiImageOn } from "react-icons/ci";
// import { BsEmojiSmileFill } from "react-icons/bs";
import { useState } from "react";
// import { IoCloseSharp } from "react-icons/io5";
import PrivacyCheckbox from "./PrivacyCheckbox.jsx";
import useCreatePost from "../../hooks/useCreatePost.js";

const CreatePost = () => {
  const [inputs, setInputs] = useState({
    question: "",
    code: "",
    privacy: "",
  });
  const { createPost } = useCreatePost();
  const isPending = false;
  const isError = false;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await createPost(inputs);
    if(inputs.code.length === 0 || inputs.question.length === 0 || inputs.privacy.length === 0){
      return;
    }
    alert("Post Created Successfully!");
  };
  const handleCheckboxChange = (privacy) => {
    setInputs({ ...inputs, privacy });
  };

  return (
    <div className="flex p-4 items-start gap-4 border-b border-gray-200">
      <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
        <textarea
          className="textarea w-full p-2 text-lg resize-none border-2 focus:outline-none hover:border-red-600"
          placeholder="Ask Anything?!"
          value={inputs.question}
          onChange={(e) => setInputs({ ...inputs, question: e.target.value })}
        />
        <textarea
          className="textarea w-full p-2 text-lg resize-none border-2 focus:outline-none hover:border-red-600"
          placeholder="Related Code"
          value={inputs.code}
          onChange={(e) => setInputs({ ...inputs, code: e.target.value })}
        />

        <PrivacyCheckbox
          onCheckboxChange={handleCheckboxChange}
          selectedPrivacy={inputs.privacy}
        />

        <div className="flex justify-between border-t py-2 border-t-gray-200">
          <button className="btn hover:bg-red-600  bg-transparent border-2 border-gray-200 rounded-full btn-sm text-white px-4">
            {isPending ? "Posting..." : "Post"}
          </button>
        </div>
        {isError && <div className="text-red-600">Something went wrong</div>}
      </form>
    </div>
  );
};
export default CreatePost;
