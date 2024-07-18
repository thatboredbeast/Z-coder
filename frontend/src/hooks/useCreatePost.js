import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useCreatePost= () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const createPost = async ({ question, code, privacy }) => {
    const success = handleInputErrors({
      question,
      code,
      privacy,
    });
    if (!success) {
      console.log("error in success");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/posts/create", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          question,
          code,
          privacy,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      // local storage
      localStorage.setItem("Zcoder-post", JSON.stringify(data));
      //context
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, createPost };
};
export default useCreatePost;

function handleInputErrors({ question, code, privacy }) {
  if (!question || !code || !privacy) {
    toast.error("Please fill all the fields");
    return false;
  }
  return true;
}
