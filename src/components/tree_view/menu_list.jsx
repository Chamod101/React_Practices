import React from 'react';
import Menu_item from './menu_item';

const Menu_list = ({list=[]}) => {
  return (
    <ul className='menu_list_container'>
      {
        list && list.length ? list.map((listItem) => <Menu_item item={listItem}/>) : null
      }
    </ul>
  );
}

export default Menu_list;
