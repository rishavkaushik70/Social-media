import styles from "./SignUp.module.css";
const SignUp = () => {
  return (
    <form className={`"row g-3" ${styles.formContainer}`}>
      <h1 className={`"h3 mb-3 fw-normal" ${styles.headingform}`}>Sign-Up</h1>
      <div className={styles.formInput}>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email :
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            autoComplete="current-Email"
            placeholder="Enter your Email Address"
          />
        </div>
        <div className="col-md-6">
          <label
            htmlFor="inputPassword4"
            className="form-label"
            autoComplete="current-Email"
          >
            Password :
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            autoComplete="current-Email"
            placeholder="Enter your new password"
          />
        </div>
        <div className="col-6">
          <label
            htmlFor="inputAddress"
            className="form-label"
            autoComplete="current-Email"
          >
            Address :
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Enter your current address"
            autoComplete="current-Email"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City :
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="Enter your city name"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputState" className="form-label">
            State :
          </label>
          <select id="inputState" className="form-select">
            <option>Choose...</option>
            <option>Bihar</option>
            <option>Uttar pradesh</option>
            <option>Delhi</option>
            <option>Maharastra</option>
            <option>Madhya pradesh</option>
          </select>
        </div>
      </div>
      <div className={`col-12 ${styles.signupbutton}`}>
        <button type="submit" className="btn btn-primary ">
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SignUp;
