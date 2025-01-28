import React, { useState } from 'react';
import Menu_list from './menu_list';

const Menu_item = ({item}) => {

  const [displayChildern, setDisplayChildren] = useState({})

  const handleToggleOnClick =(currentLable)=>{
    setDisplayChildren({...displayChildern,[currentLable] : !displayChildern[currentLable]})
  }

  return (
    <li>
      <div style={{display:'flex', gap:'20px'}}>
      <p>{item.label}</p>
      {item.children ? <span onClick={()=>handleToggleOnClick(item.label)}>
        {
          displayChildern[item.label] ? '-':'+'
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
