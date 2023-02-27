import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const MenuNormalItem = (props) => {
  return (
    <div className="flex flex-row justify-between text-[18px] mx-8 py-3 text-darkFontColor hover:text-turquoise hover:cursor-pointer font-TradeGothicLTStdRegular">
      {!props.multiLevel && !props.submenuSecondLevel ? (
        <a href={"#"}>
          <div>{props.name}</div>
        </a>
      ) : (
        <div>{props.name}</div>
      )}
      {props.submenuSecondLevel ? (
        <div className=" text-turquoise">
          <MdArrowForwardIos />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MenuNormalItem;
