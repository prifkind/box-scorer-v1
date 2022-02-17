import React from "react";

const Selector = ({ setSelectDate}) => {


  return (
    <div>
      <select
        className="ui selection dropdown"
        onChange={(e) => {
          setSelectDate(e.target.value);
        }}
      >
        <option value="Today">Today</option>
        <option value="Yesterday">Yesterday</option>
      </select>
    </div>
  );
};

export default Selector;
