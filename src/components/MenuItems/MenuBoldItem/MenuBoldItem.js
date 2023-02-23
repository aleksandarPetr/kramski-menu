import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const MenuBoldItem = (props) => {
  return (
    <div className="flex flex-row justify-between font-bold text-xl mx-8 py-3 hover:text-sky-500 hover:cursor-pointer">
      <div>{props.name}</div>
      <div className="pt-1 text-sky-500">
        <MdArrowForwardIos />
      </div>
    </div>
  );
};

export default MenuBoldItem;
