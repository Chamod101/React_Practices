import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setselected] = useState(null);
  const [enabled, setEnabled] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  const handleOnClick = (ClickedID) => {
    setselected(ClickedID === selected ? null : ClickedID);
  };

  const handleMultiple = (clickedID) => {
    setMultipleSelected((currentValues) =>
      currentValues.includes(clickedID)
        ? currentValues.filter((id) => id !== clickedID) // Remove if already selected
        : [...currentValues, clickedID] // Add if not selected
    );
  };

  return (
    <div className="Accordian_holder">
      <button className="Enable_btn" onClick={()=>setEnabled(!enabled)}>Enable Multiple Selection</button>
      <div className="Accordian_item">
        {data && data.length > 0 ? (
          data.map((eachItem) => (
            <div
              className="item"
              key={eachItem.id}
              onClick={enabled ? ()=> handleMultiple(eachItem.id) : () => handleOnClick(eachItem.id)}
            >
              <div className="title_section">
                <h3>{eachItem.question}</h3>
                {selected === eachItem.id || multipleSelected.includes(eachItem.id)? <h3>-</h3> : <h3>+</h3>}
              </div>
              {enabled
                ? multipleSelected.includes(eachItem.id) && (
                    <div className="Anser">{eachItem.answer}</div>
                  )
                : selected === eachItem.id && (
                    <div className="Anser">{eachItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data present</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
