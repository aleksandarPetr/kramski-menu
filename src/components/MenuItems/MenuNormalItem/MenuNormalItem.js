import React from "react";

const MenuNormalItem = (props) => {
  return (
    <div className="flex flex-row justify-between text-sm mx-8 py-3 hover:text-sky-500 hover:cursor-pointer">
      <div>{props.name}</div>
    </div>
  );
};

export default MenuNormalItem;
