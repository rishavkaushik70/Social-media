import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  } else if (action.type === "CREATE_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );
  const addPost = (
    userName,
    userId,
    userTitle,
    userBody,
    userReactions,
    postTags,
  ) => {
    dispatchPostList({
      type: "CREATE_POST",
      payload: {
        id: Date.now(),
        userName: userName,
        title: userTitle,
        body: userBody,
        reactions: userReactions,
        userId: userId,
        tags: postTags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    userName: "Kriti kaushik",
    title: "Aaj meri pitti hui hai.",
    body: "Mere piti hui h aaj, kyuki maine aaj khana time pe nhi khaya tha aur jubana ladaya tha mumma se",
    reactions: 20,
    userId: "user-1",
    tags: ["Angry", "Mood-off", "Sad"],
  },
  {
    id: 2,
    userName: "Rishav kaushik",
    title: "Aaj Banaras jana hua",
    body: "Aaj bnaras jane ka shaubhaya prapt hua. Bahut enjoy kiyaa gyaa",
    reactions: 10,
    userId: "user-2",
    tags: ["Enjoying", "Vacation"],
  },
];
export default PostListProvider;
