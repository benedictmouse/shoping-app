import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaCheck } from "react-icons/fa";
import appLinks from "../constants/Links";
import Avatar from "../images/nerd1.jpeg";
import "../styles/Userprofile.css";

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar);
  const [name, setName] = useState("Benedict Omondi");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAvatarUpdated, setIsAvatarUpdated] = useState(false);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
      setIsAvatarUpdated(true);
    }
  };

  return (
    <section className="profile">
      <div className="container profile_container">
        <h1>User Profile</h1>
        <Link to={appLinks.Wishlist} className="wishlist-button">
          View Wishlist
        </Link>
        <div className="profile_detail">
          <div className="avatar_wrapper">
            <img src={avatar} alt="avatar" />
            <form className="avatar_form">
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={handleAvatarChange}
                accept="image/png, image/jpeg"
              />
              <label htmlFor="avatar">
                {isAvatarUpdated ? <FaCheck /> : <FaEdit />}
              </label>
            </form>
          </div>
        </div>
        <h4>{name}</h4>
      </div>
      <form className="form profile_form">
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Update details
        </button>
      </form>
    </section>
  );
};

export default UserProfile;
