import React from "react";

const Card = ({ user }) => {
  return (
    <div className="card_container">
      <div className="heading">
        <img src={user.avatar_url} alt="" />
        <h1>{user.login}</h1>
      </div>
      <div className="bio">
        <div>
          <h3>Bio</h3>
          <p>{user.bio}</p>
        </div>
        <div>
          <h3>Company</h3>
          <p>{user.company ? user.company : 'Null'}</p>
        </div>
        <div>
          <h3>Blog</h3>
          <p>{user.blog}</p>
        </div>
        <div>
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
