import React, { useState } from "react";

function HookList() {
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    setItems([
      ...items,
      {
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <>
      <button class='long-btn' onClick={handleAdd}>Add</button>
      <div>
        <ul>
          {items.map((item) => (
            <li className='list-item'>{item.value}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HookList;
