import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostLists } from "../../context/PostContext";
import WelcomeMessage from "../pages/WelcomeMessage";
import Loading from "./Loading";

const PostList = () => {
  const { postList, fetching } = useContext(PostLists);

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
