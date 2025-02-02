import axios from "axios";
import React, { useState } from "react";
import Card from "./card";

const Profile_finder = () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    fetchGithubUserDate();
  };

  const fetchGithubUserDate = async () => {
    setLoading(true);
    const result = await axios.get(`https://api.github.com/users/${userName}`);
    if (result.data) {
      setUserData(result.data);
      setLoading(false);
      console.log(result.data)
    }
  };

  return (
    <div className="github_container">
      <div className="input_wrapper">
        <input
          type="text"
          name="search"
          placeholder="Enter Github username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => onSubmit()}>Search</button>
      </div>
      <div className="data_container">
        {loading ? (
          <h3>Loading! please wait</h3>
        ) : (
          <div>
            {
              userData === null ? '' : <Card user={userData} />
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile_finder;
