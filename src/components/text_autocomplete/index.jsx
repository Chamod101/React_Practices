import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AutoComplete = () => {

  const [loading, setLoading] = useState(false);
  const [users, setUsers] =useState([]);
  const [error, setError] =useState(null)
  const [param, setParam] = useState('')
  const [showDropdown, setShowDropdown] =useState(false)
  const [filterdUsers, setFilterdUsers] =useState([])

  const fetchAllUsers =async()=>{
    try{
      setLoading(true)
      const result = await axios.get('https://dummyjson.com/users')
      console.log(result.data.users.map(user=>user.firstName))
      setUsers(result.data.users.map(user=>user.firstName))
      setLoading(false)
    }
    catch(error)
    {
      console.log(error)
      setError(error)
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchAllUsers()
  },[])

  const handleChange=(event)=>{
    const query = event.target.value.toLowerCase()
    setParam(query)
    if(query!==''){
      const filterdUser = users.filter((item)=>item.toLowerCase().indexOf(query) > -1)
      setFilterdUsers(filterdUser)
    }
  }

  return (
    <div className='search_container'>
      <input type="text" name='search' placeholder='Enter user name' value={param} onChange={(e)=>handleChange(e)}/>
    </div>
  );
}

export default AutoComplete;
