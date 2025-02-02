import React from "react";
import './style.css'

const Card = ({ user }) => {
  return (
    <div className="card_container">
      <div className="heading">
        <img src={user.avatar_url} alt="" />
        <h1>{user.login}</h1>
      </div>
      <div className="bio">
        <div className="div_bio1">
          <h3>Bio</h3>
          <p>{user.bio}</p>
        </div>
        <div className="div_bio2">
          <h3>Company</h3>
          <p>{user.company ? user.company : 'Null'}</p>
        </div>
        <div className="div_bio3">
          <h3>Blog</h3>
          <p>{user.blog}</p>
        </div>
        <div className="div_bio4">
          <h3>Location</h3>
          <p>{user.location}</p>
        </div>
      </div>
      <div className="public_data">
        <div>
          <h3>Followers</h3>
          <p>{user.followers}</p>
        </div>
        <div>
          <h3>Following</h3>
          <p>{user.following}</p>
        </div>
        <div>
          <h3>Public Repos</h3>
          <p>{user.public_repos}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
