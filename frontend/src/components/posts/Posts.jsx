import Post from "./Post";
import PostSkeleton from "../skeletons/PostSkeleton";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const Posts = ({ feedType }) => {
  const { authUser } = useAuthContext();
  const getPostEndpoint = () => {
    switch (feedType) {
      case "forYou":
        return `/api/posts/user/${authUser.username}`;
      case "All":
        return "/api/posts/all";
      default:
        return "/api/posts/all";
    }
  };
  const POST_ENDPOINT = getPostEndpoint();

  const {
    data: posts,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        const res = await fetch(POST_ENDPOINT);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        return data;
      } catch (error) {
        throw new Error(error);
      }
    },
  });

  useEffect(() => {
    refetch();
  }, [feedType, refetch]);

  return (
    <>
      {(isLoading || isRefetching) && (
        <div className="flex flex-col justify-center">
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </div>
      )}
      {!isLoading && !isRefetching && posts?.length === 0 && (
        <p className="text-center my-4">No posts in this tab. Switch 👻</p>
      )}
      {!isLoading && !isRefetching && posts && (
        <div>
          {feedType === "forYou"
            ? posts
                .filter((post) => post.privacy === "private")
                .map((post) => <Post key={post._id} post={post} />)
            : posts
                .filter((post) => post.privacy === "public")
                .map((post) => <Post key={post._id} post={post} />)}
        </div>
      )}
    </>
  );
};
export default Posts;
