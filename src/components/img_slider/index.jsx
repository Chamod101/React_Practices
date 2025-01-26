import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

const Img_slider = ({ url, limit = 5 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loadingState, setLoadingState] = useState(false);

  // Fetch images from the API
  const fetchImages = async (url) => {
    setLoadingState(true);
    try {
      const response = await fetch(`${url}?page=1&limit=${limit}`);
      if (!response.ok) throw new Error("Failed to fetch images");
      const data = await response.json();
      setImages(data);
      setErrorMsg(null); // Clear any previous errors
    } catch (error) {
      setErrorMsg(error.message);
      setImages([]); // Clear images on error
    } finally {
      setLoadingState(false);
    }
  };

  useEffect(() => {
    if (url) fetchImages(url);
  }, [url]);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 6000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [images]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="container">
      {loadingState ? (
        <div>Loading Data! Please Wait</div>
      ) : errorMsg ? (
        <div>Error occurred! {errorMsg}</div>
      ) : images.length > 0 ? (
        <>
          <BsArrowLeftCircleFill
            className="arrow arrow-left"
            onClick={handlePrevious}
          />
          {images.map((img, index) => (
            <img
              key={img.id}
              alt={`Slide ${index}`}
              src={img.download_url}
              className={`current_img ${
                currentSlide === index ? "visible" : "hidden"
              }`}
            />
          ))}
          <BsArrowRightCircleFill
            className="arrow arrow-right"
            onClick={handleNext}
          />
          <div className="indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`current_indicator ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </>
      ) : (
        <div>No images available</div>
      )}
    </div>
  );
};

export default Img_slider;