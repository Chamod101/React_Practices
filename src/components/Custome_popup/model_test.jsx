
import React, { useState } from 'react';
import Modal from './modal';

const Model_test = () => {

  const [showModel, setShowModel] = useState(false)

  const handleToggle =()=>{
    setShowModel(!showModel)
  }

  const onClose =()=>{
    setShowModel(!showModel)
  }

  return (
    <div>
      <button onClick={()=>handleToggle()}>Open Popup</button>
      {
        showModel && <Modal onClose={onClose} body={<div>This is a custome body</div>}/>
      }
    </div>
  );
}

export default Model_test;
