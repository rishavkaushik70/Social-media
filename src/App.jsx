import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import CreatePost from "./components/post/CreatePost";
import PostList from "./components/post/PostList";
import { useState } from "react";
import SignUp from "./components/pages/signUpForm/SignUp";
import LoginForm from "./components/pages/loginForm/LoginForm";
import PostListProvider from "./context/PostContext";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [loginButton, setLoginButton] = useState("");

  return (
    <PostListProvider>
      <div className="container-box">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          setLoginButton={setLoginButton}
        ></Sidebar>
        <div className="content">
          <Header
            loginButton={loginButton}
            setLoginButton={setLoginButton}
            setSelectedTab={setSelectedTab}
          ></Header>
          {loginButton ? (
            loginButton === "Sign-up" ? (
              <SignUp />
            ) : (
              <LoginForm />
            )
          ) : selectedTab === "Home" ? (
            <PostList />
          ) : (
            <CreatePost />
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
