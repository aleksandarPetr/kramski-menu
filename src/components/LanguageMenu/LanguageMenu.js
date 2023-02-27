import React from "react";
import { BiWorld } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import { BsCheck2 } from "react-icons/bs";

const LanguageMenu = (props) => {
  return (
    <div className="flex flex-col bg-[#F9F9F9]">
      <div className="flex flex-col pl-16 mx-8 py-5">
        {/* {props.language === 'english' ? } */}
        <div className="flex flex-row justify-start py-2">
          <div className="flex items-center pt-1 pl-1 pr-3.5 gap-3">
            <BsCheck2 />
          </div>
          <div className="">Deutsch</div>
        </div>
        <div className="flex flex-row justify-start py-2">
          <div className="flex items-center pt-1 pl-1 pr-3.5 gap-3">
            <BsCheck2 />
          </div>
          <div className="">English</div>
        </div>
      </div>
      <div
        className="flex flex-row justify-between bg-[#F3F3F3] py-5 text-darkFontColor hover:text-turquoise hover:cursor-pointer"
        onClick={props.onClick}
      >
        <div className="flex flex-row justify-start gap-3 mx-8 pl-16 left-0 right-0 ">
          <div className="pt-0.25 text-2xl">
            <BiWorld />
          </div>
          <span className="">Deutsch</span>
        </div>
        <div className="pr-16 pt-0.5 font-bold text-xl text-turquoise">
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
};

export default LanguageMenu;
