import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    techStack,
    competetiveRating,
    favouriteLanguage,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      techStack,
      competetiveRating,
      favouriteLanguage,
      confirmPassword,
      gender,
    });
    if (!success) {
      console.log("error in success");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          techStack,
          competetiveRating,
          favouriteLanguage,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      // local storage
      localStorage.setItem("Zcoder-user", JSON.stringify(data));
      //context
      setAuthUser(data);
      console.log("useSignup.js",data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};
export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  techStack,
  competetiveRating,
  favouriteLanguage,
  confirmPassword,
  gender,
}) {
  if (
    !fullName ||
    !username ||
    !password ||
    !techStack ||
    !competetiveRating ||
    !favouriteLanguage ||
    !confirmPassword ||
    !gender
  ) {
    toast.error("Please fill all the fields");
    return false;
  }
  if (password != confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be atleast 6 characters");
    return false;
  }
  return true;
}
