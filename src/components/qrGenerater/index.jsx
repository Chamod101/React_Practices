import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QRGenerater = () => {

  const [input,setInput] = useState('')

  return (
    <div>   
      {/* style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} */}
      <h2>QR Generater</h2>
      <input type="text" placeholder='Enter value' onChange={(e)=>setInput(e.target.value)}/>
      {input === '' ? null : <QRCode id='QR_value' value={input} size={400}/>}
    </div>
  );
}

export default QRGenerater;
