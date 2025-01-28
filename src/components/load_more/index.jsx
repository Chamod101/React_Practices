import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

const Load_More = () => {
  const [products, setProducts] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const [disebled, setDisebled] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [clickCount]);

  useEffect(()=>{
    setDisebled(clickCount * 20 === 100? true : false) 
  },[products])

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=20&skip=${clickCount === 0 ? 0 : clickCount * 20}`
      );
      console.log(response.data.products)
      setProducts((prevData) => [...prevData, ...response.data.products]);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      {products? (
        <div className="Data_container">
          {products.map((item,index)=>(
            <div className="item" key={index}>
              <img src={item.thumbnail} alt={item.thumbnail} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      ) : null}
      {disebled ? <p>You reached the product limit</p> : null}
      <button disabled={disebled} className="Load_more" onClick={()=>setClickCount(clickCount + 1)}>Load More</button>
    </div>
  );
};

export default Load_More;
