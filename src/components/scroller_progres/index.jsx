import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
import DOG from '../../assets/Dog.gif'

const Scroller = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      setData(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handleScrollPercentage = () => {
    // console.log(
    //   document.documentElement.scrollTop, //our scroll heigh - current
    //   document.documentElement.scrollHeight, // total height of the scroller
    //   document.documentElement.clientHeight //total height of the document
    // );

    const currentScrolled = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((currentScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(scrollPercentage);

  return (
    <div className="container">
      <div className="top_container">
        <h1>Custom Scroll Indicator</h1>

        <div className="tracking_container">
          <div
            className="current_progress"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
          <div
            className="start_mark"
            style={{ left: `calc(${scrollPercentage}% - 10px)`}} // Adjust the offset
          >
            <img src={DOG} alt="Dog GIF" />
          </div>
        </div>
      </div>

      <div className="data_container">
        {data.map((item,index) => (
          <p key={index}>{item.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Scroller;
