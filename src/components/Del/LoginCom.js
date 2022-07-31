import React from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import "./LoginCom.css";
import Jumbodata from "../Jumbotron/Jumbodata.json";
import Collapsible from "../Collapsible/Collapsible";
import faqData from "../Collapsible/faqData.json";
import { ArrowForwardIos } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const LoginCom = ({ setSignIn }) => {
  const navigate = useNavigate;

  const formHandler = (e) => {
    e.preventDefault();
    navigate.push("/signup");
  };

  return (
    <>
      <div className="loginScreen">
        <div className="loginScreen_bg">
          <img
            className="loginScreen_logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix Page"
          />
          <button
            onClick={() => setSignIn(true)}
            className="loginScreen_button"
          >
            Sign In
          </button>
          <div className="loginScreen_gradient" />
        </div>
        <div className="loginScreen_body"></div>
        <div className="loginScreen_body">
          <h1>
            Unlimited movies, TV <br /> shows and more.
          </h1>
          <h2>Watch anywhere. Cancel at any time.</h2>

          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="loginScreen_input">
            <form>
              <input type="email" placeholder="Email Address" />
              <button
                onClick={() => setSignIn(true)}
                className="loginScreen_getStarted"
              >
                GET STARTED
              </button>
            </form>
          </div>
        </div>
        <div>
          <div className="jumbotrones">
            {Jumbodata.map((data) => (
              <Jumbotron
                key={data.id}
                img={data.img}
                img_position={data.img_position}
                alt={data.alt}
                title={data.title}
                content={data.content}
              />
            ))}
            <div className="faq">
              <h1>Frequently Asked Questions</h1>
              <div className="collapsibles">
                {faqData.map((data) => (
                  <Collapsible
                    key={data.id}
                    header={data.header}
                    body={data.body}
                  />
                ))}
              </div>
              <h2>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h2>
              <form className="landing__email" onSubmit={formHandler}>
                <input required type="email" placeholder="Email address" />
                <button type="submit">
                  Get Started&nbsp;
                  <ArrowForwardIos />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginCom;
