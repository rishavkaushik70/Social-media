const Header = ({ loginButton, setLoginButton, setSelectedTab }) => {
  return (
    <header className="p-3 text-bg-dark">
      {" "}
      <div className="container">
        {" "}
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          {" "}
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            {" "}
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>{" "}
          </a>{" "}
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {" "}
            <li
              onClick={() => {
                setSelectedTab("Home");
                setLoginButton("");
              }}
            >
              <a href="#" className="nav-link px-2 text-secondary text-white">
                Home
              </a>
            </li>{" "}
            <li
              onClick={() => {
                setSelectedTab("Create post");
                setLoginButton("");
              }}
            >
              <a href="#" className="nav-link px-2 text-white">
                Create Post
              </a>
            </li>{" "}
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Pricing
              </a>
            </li>{" "}
            <li>
              <a href="#" className="nav-link px-2 text-white">
                FAQs
              </a>
            </li>{" "}
            <li>
              <a href="#" className="nav-link px-2 text-white">
                About
              </a>
            </li>{" "}
          </ul>{" "}
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            {" "}
            <input
              name="search"
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />{" "}
          </form>{" "}
          <div className="text-end">
            {" "}
            <button
              type="button"
              className={`btn ${loginButton === "Login" ? "btn-warning" : "btn-outline-light"}`}
              onClick={() => {
                setLoginButton("Login");
              }}
            >
              Login
            </button>{" "}
            <button
              type="button"
              className={`btn ${loginButton === "Sign-up" ? "btn-warning" : "btn-outline-light"}`}
              onClick={() => {
                setLoginButton("Sign-up");
              }}
            >
              Sign-up
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
};

export default Header;
