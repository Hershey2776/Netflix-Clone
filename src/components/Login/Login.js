import React, { useState } from "react";
import LoginCom from "../Del/LoginCom";
import SignUp from "../SignUp/SignUp";
import "./Login.css";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div>
      {signIn ? (
        <SignUp setSignIn={setSignIn} />
      ) : (
        <>
          <LoginCom setSignIn={setSignIn} />
        </>
      )}
    </div>
  );
};

export default Login;
