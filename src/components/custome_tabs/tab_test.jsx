import React from 'react';
import Tabs from './tabs';
import Random from './randomContent';

const Tab_test = () => {

  const tabs =[
    {
      label : 'Tab 1',
      content : <div>This is content for tab 1</div>
    },
    {
      label : 'Tab 2',
      content : <div>This is content for tab 2</div>
    },
    {
      label : 'Tab 3',
      content : <Random/>
    }
  ]

  const handleChane =(currentIndex)=>{
    console.log(currentIndex);
  }

  return (
    <Tabs tabsContent={tabs} onChange={handleChane}/>
  );
}

export default Tab_test;
