import React from "react";
import ReactModal from "react-modal";
import { GrClose } from "react-icons/gr";
import "./Menu.css";
import "../MenuItems/menuItemsList";
import { menuItemsList } from "../MenuItems/menuItemsList";
import MenuBoldItem from "../MenuItems/MenuBoldItem/MenuBoldItem";
import MenuNormalItem from "../MenuItems/MenuNormalItem/MenuNormalItem";
import { BsSearch, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";

function Menu({ isOpen, onRequestClose, onClick }) {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const modalStyle = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.75)",
    },
    content: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      //   minWidth: `${isSmallScreen ? "60%" : "40%"}`,
      maxWidth: `${isSmallScreen ? "100%" : "40%"}`,
      border: "1px solid #ccc",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      paddingTop: 20,
      paddingLeft: 0,
      paddingBottom: 0,
      paddingRight: 0,
    },
  };

  return (
    <div>
      <ReactModal
        style={modalStyle}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        closeTimeoutMS={500}
        ariaHideApp={false}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col justify-start w-full">
            <div className="self-end pr-[20px]" onClick={onClick}>
              <GrClose fontSize="large" />
            </div>
            <div className="mx-4.75 pt-8 pl-16 pr-16">
              <div className="w-full flex flex-row justify-between">
                <input
                  className="border-0 outline-0 w-full"
                  placeholder="Search"
                  bordered="false"
                />
                <div className="pr-1.5">
                  <BsSearch />
                </div>
              </div>
              <hr />
            </div>
            <div className="pt-14 pl-16 pr-16">
              {menuItemsList.map((item) => {
                return item.multiLevel ? (
                  <MenuBoldItem
                    name={item.name}
                    multiLevel={item.multiLevel}
                    key={item.name}
                  />
                ) : (
                  <MenuNormalItem
                    name={item.name}
                    multiLevel={item.multiLevel}
                    key={item.name}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row justify-start mx-4.75 pl-16 py-4 gap-3 text-xl">
              <div className="hover:text-sky-500 hover:cursor-pointer">
                <BsTwitter />
              </div>
              <div className="hover:text-sky-500 hover:cursor-pointer">
                <FaLinkedinIn />
              </div>
              <div className="hover:text-sky-500 hover:cursor-pointer">
                <BsInstagram />
              </div>
              <div className="hover:text-sky-500 hover:cursor-pointer">
                <FaFacebookF />
              </div>
            </div>
            <div className="flex flex-row justify-between bg-zinc-200 py-5 hover:text-sky-500 hover:cursor-pointer">
              <div className="flex flex-row justify-start gap-3 mx-4.75 pl-16 left-0 right-0 ">
                <div className="pt-0.25 text-2xl">
                  <BiWorld />
                </div>
                <span className="">Deutsch</span>
              </div>
              <div className="pt-1 pr-16 font-bold text-xl text-sky-500">
                <MdArrowForwardIos />
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default Menu;
