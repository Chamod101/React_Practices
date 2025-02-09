import React from 'react';
import useFetch from '.';

const UseFetchTest = () => {

  const {data,loading,error} =useFetch("https://dummyjson.com/products",{})


  return (
    <div>
      <h1>UseFetchHook</h1>
      {
        loading ? <h3>Loading.Please wait</h3> : null
      }
    
      
    </div>
  );
}

export default UseFetchTest;
