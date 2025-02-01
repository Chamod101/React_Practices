import React from 'react';
import './model.css'

const Modal = ({id,header,body,footer, onClose}) => {
  return (
    <div id={id || 'Modal'} className='modal'>
      <div className="content">
        <div className="header">
          <h2>{header ? header : 'Default Header'}</h2>
          <span onClick={()=>onClose()} className="close_model_icon">&times;</span>
        </div>
        <div className="body">
          {
            body ? body : <div><p>This is default popup body</p></div>
          }
        </div>
        <div className="footer">
          {
            footer ? footer : <h2>Default Footer</h2>
          }
        </div>
      </div>
    </div>
  );
}

export default Modal;
