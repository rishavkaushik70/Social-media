import styles from "./LoginForm.module.css";
const LoginForm = () => {
  return (
    <form className={styles.container}>
      <div className={styles.mainContainer}>
        <h1 className={`"h3 mb-3 fw-normal" ${styles.headingform}`}>
          Login Here
        </h1>{" "}
        <div className={styles.inputContainerForm}>
          <div className="form-floating">
            {" "}
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              autoComplete="current-Email"
            />{" "}
            <label htmlFor="floatingInput">Email address</label>{" "}
          </div>{" "}
          <div className="form-floating">
            {" "}
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              autoComplete="current-Password"
            />{" "}
            <label htmlFor="floatingPassword">Password</label>{" "}
          </div>{" "}
        </div>
        <div className="form-check text-start my-3">
          {" "}
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="checkDefault"
          />{" "}
          <label className="form-check-label" htmlFor="checkDefault">
            Remember me
          </label>{" "}
        </div>{" "}
        <button className="btn btn-primary w-50 py-2" type="submit">
          Sign in
        </button>{" "}
      </div>
    </form>
  );
};

export default LoginForm;
