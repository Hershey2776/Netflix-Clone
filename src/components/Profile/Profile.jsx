import React from "react";
import "./Profile.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../fireBase";
import Nav from "../Nav/Nav";
import Plans from "../Plans/Plans";

const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <Nav />
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="ava"
          />
          <div className="profile_details">
            <h2>{user.email}</h2>
            <div className="profile_plans">
              <h3>Plans</h3>
              <Plans></Plans>

              <button
                onClick={() => auth.signOut()}
                className="profile_signout"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
