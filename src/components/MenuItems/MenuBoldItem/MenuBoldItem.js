import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const MenuBoldItem = (props) => {
  return (
    <div
      className="flex flex-row justify-between font-bold text-[22px] mx-8 py-[8px] text-darkFontColor hover:text-turquoise hover:cursor-pointer font-TradeGothicLTStdUltraBold"
      onClick={props.onClick}
    >
      <div>{props.name}</div>
      <div className=" text-turquoise">
        <MdArrowForwardIos />
      </div>
    </div>
  );
};

export default MenuBoldItem;
