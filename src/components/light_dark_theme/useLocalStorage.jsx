import React, { useEffect, useState } from "react";

const UseLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currantValue;
    try {
      currantValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
    } catch (error) {
      console.log(error);
      currantValue = defaultValue
    }

    return currantValue
  });


  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
  },[key,value])

  return [value,setValue];
};

export default UseLocalStorage;
