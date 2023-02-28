import React from "react";
import { BiArrowBack } from "react-icons/bi";

const BackButton = (props) => {
  return (
    <div
      className="flex flex-row justify-start gap-2 text-[12px] hover:cursor-pointer font-TradeGothicLTStdRegular"
      onClick={props.onClick}
    >
      <div className="pt-[3px] -ml-1 text-turquoise">
        <BiArrowBack />
      </div>
      <div>ZURÜCK</div>
    </div>
  );
};

export default BackButton;
