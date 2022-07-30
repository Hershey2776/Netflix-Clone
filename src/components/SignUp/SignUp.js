import React, { useRef } from "react";
import "./SignUp.css";
import { auth } from "../../fireBase";

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    /* prettier-ignore */
    auth.createUserWithEmailAndPassword(
        emailRef.current.value,
      passwordRef.current.value
      )
      .then((authUser) => {  })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((error) => alert("wrong "));
  };

  return (
    <div className="bg">
      <div className="bg_grade">
        <img
          className="signup_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Page"
        />
        <button className="signup_button"> Sign In</button>
        <div className="SignUp">
          <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="Email" placeholder="Email" />
            <br />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <br />
            <button type="submit" onClick={signIn}>
              Sign In
            </button>

            <h4>
              <span className="SignUp_grey">New to Netflix? </span>
              <span className="SignUp_link" onClick={register}>
                Sign up now.
              </span>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
