import React from "react";
import Menu_list from "./menu_list";
import "./styles.css"

const TreeView =({menus =[]})=>{
  return(
    <div className="tree_view_container">
      <Menu_list list={menus}/>
    </div>
  )
}

export default TreeView;