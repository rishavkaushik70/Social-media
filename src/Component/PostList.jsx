import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/Posts-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./Loading";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <Loading></Loading>}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && (
        <div className="postContainer">
          {postList.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default PostList;
