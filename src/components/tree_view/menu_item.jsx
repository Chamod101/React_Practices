import React, { useState } from 'react';
import Menu_list from './menu_list';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Menu_item = ({item}) => {

  const [displayChildern, setDisplayChildren] = useState({})

  const handleToggleOnClick =(currentLable)=>{
    setDisplayChildren({...displayChildern,[currentLable] : !displayChildern[currentLable]})
  }

  return (
    <li className='menu_item'>
      <div style={{display:'flex', gap:'20px'}}>
      <p>{item.label}</p>
      {item.children ? <span onClick={()=>handleToggleOnClick(item.label)}>
        {
          displayChildern[item.label] ? <FaMinus size={10}/>:<FaPlus size={10}/>
        }
      </span> : null}
      </div>
      {
        item && item.children && item.children.length > 0 && displayChildern[item.label] ? <Menu_list list={item.children}/> : null
      }
    </li>
  );
}

export default Menu_item;
