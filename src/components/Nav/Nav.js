import React from "react";
import "./Nav.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [scroll, setScroll] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else setScroll(false);
    });
  }, []);

  return (
    <div className={`nav ${scroll && "nav_black"}`}>
      <img
        className="nav_logo"
        onClick={() => history("/", { replace: true })}
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="netflix logo"
      />
      <img
        onClick={() => history("/profile", { replace: true })}
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="user"
      />
    </div>
  );
};

export default Nav;
