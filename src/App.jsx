import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Sidebar from "./Component/Sidebar";
import CreatePost from "./Component/CreatePost";
import PostList from "./Component/PostList";
import { useState } from "react";
import SignUp from "./Component/SignUp";
import LoginForm from "./Component/LoginForm";
import PostListProvider from "./Store/Posts-list-store";

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
