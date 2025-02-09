import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = (url, option = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const respone = await fetch(url, { ...option });
      console.log(respone)
      if (!respone.ok) throw new Error(respone.statusText);
      setData(respone)
      setError(null)
      setLoading(false)
      console.log(data)
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchData()
  },[url])

  return {data,loading,error};
};

export default useFetch;
