import { useContext, useRef } from "react";
import { PostList } from "../Store/Posts-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userNameElement = useRef();
  const userIdElement = useRef();
  const userTitleElement = useRef();
  const userBodyElement = useRef();
  const userReactionsElement = useRef();
  const userTagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userName = userNameElement.current.value;
    const userId = userIdElement.current.value;
    const userTitle = userTitleElement.current.value;
    const userBody = userBodyElement.current.value;
    const userReactions = userReactionsElement.current.value;
    const postTags = userTagsElement.current.value.split(" ");

    addPost(userName, userId, userTitle, userBody, userReactions, postTags);
  };
  return (
    <>
      <h1 className="postheading">Create your post</h1>{" "}
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Enter your Name :
          </label>
          <input
            ref={userNameElement}
            type="text"
            className="form-control"
            id="userName"
            aria-describedby="emailHelp"
            autoComplete="current-name"
            placeholder="Please enter your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your UserId :
          </label>
          <input
            ref={userIdElement}
            type="text"
            className="form-control"
            id="userId"
            aria-describedby="emailHelp"
            autoComplete="current-name"
            placeholder="Please enter your userId"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Enter your Title :
          </label>
          <input
            ref={userTitleElement}
            type="text"
            className="form-control"
            id="title"
            autoComplete="current-title"
            placeholder="What's your Title?"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Tell us more about your post :
          </label>
          <textarea
            ref={userBodyElement}
            rows={4}
            type="body"
            className="form-control"
            id="title"
            autoComplete="current-title"
            placeholder="Please write about your post "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of people Reacted :
          </label>
          <input
            ref={userReactionsElement}
            type="text"
            className="form-control"
            id="reactions"
            autoComplete="current-title"
            placeholder="How many people reacted on your post?"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your Tags :
          </label>
          <input
            ref={userTagsElement}
            type="text"
            className="form-control"
            id="tags"
            aria-describedby="emailHelp"
            placeholder="Write your Hashtags using Space"
          />
        </div>
        <div className="postbuttoncontainer">
          <button type="submit" className="btn btn-primary postbutton">
            Post
          </button>
        </div>
      </form>
    </>
  );
};

export default CreatePost;
