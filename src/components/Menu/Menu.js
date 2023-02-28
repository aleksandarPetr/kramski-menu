import React, { useState, useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import ReactModal from "react-modal";
import { GrClose } from "react-icons/gr";
import "./Menu.css";
import { menuItemsList } from "../../data/menuItemsList";
import BackButton from "../BackButton/BackButton";
import SearchInput from "../SearchInput/SearchInput";
import MenuBoldItem from "../MenuItems/MenuBoldItem/MenuBoldItem";
import MenuNormalItem from "../MenuItems/MenuNormalItem/MenuNormalItem";
import { MdArrowForwardIos } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import { BsCheck2 } from "react-icons/bs";

const Menu = ({ isOpen, onRequestClose, onClick }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 1023 });
  const [menuItems, setMenuItems] = useState(menuItemsList);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [language, setLanguage] = useState("Deutsch");

  const ref = useRef();

  useOnClickOutside(ref, () => setIsLanguageMenuOpen(false));

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
      maxWidth: `${
        isSmallScreen ? "100%" : isMediumScreen ? "480px" : "600px"
      }`,
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
        <div className="flex flex-col justify-between h-full font-TradeGothicLTStdRegular">
          <div className="flex flex-col justify-start w-full">
            <div
              className="self-end pr-[20px] hover:cursor-pointer"
              onClick={onClick}
            >
              <GrClose fontSize="large" />
            </div>
            {menuItems === menuItemsList ? (
              <div className="mx-8 pt-8 pl-16 pr-16">
                <SearchInput />
              </div>
            ) : (
              <div className="mx-8 pt-8 pl-12 pr-16">
                <BackButton onClick={() => setMenuItems(menuItemsList)} />
              </div>
            )}
            <div className="pt-14 pl-16 pr-16">
              {menuItems.map((item) => {
                return item.multiLevel ? (
                  <MenuBoldItem
                    name={item.name}
                    multiLevel={item.multiLevel}
                    key={item.name}
                    onClick={() => setMenuItems(item.submenuFirstLevel)}
                  />
                ) : (
                  <MenuNormalItem
                    name={item.name}
                    multiLevel={item.multiLevel}
                    key={item.name}
                    submenuSecondLevel={item.submenuSecondLevel}
                  />
                );
              })}
            </div>
          </div>
          {menuItems === menuItemsList ? (
            <div ref={ref} className="flex flex-col">
              {!isLanguageMenuOpen ? (
                <SocialNetworks />
              ) : (
                <div className="flex flex-col pl-16 py-5 bg-[#F9F9F9] font-TradeGothicLTStdRegular">
                  <div
                    className="flex flex-row justify-start left-2 py-2 mx-8 hover:text-turquoise hover:cursor-pointer"
                    onClick={() => setLanguage("Deutsch")}
                  >
                    <div className="flex items-center pt-1 pl-1 pr-3.5 gap-3">
                      {language === "Deutsch" ? <BsCheck2 /> : ""}
                    </div>
                    <div
                      className={
                        language !== "Deutsch"
                          ? `pl-4 font-thin`
                          : `font-semibold`
                      }
                    >
                      Deutsch
                    </div>
                  </div>
                  <div
                    className="flex flex-row justify-start py-2 mx-8 hover:text-turquoise hover:cursor-pointer"
                    onClick={() => setLanguage("English")}
                  >
                    <div className="flex items-center pt-1 pl-1 pr-3.5 gap-3">
                      {language === "English" ? <BsCheck2 /> : ""}
                    </div>
                    <div
                      className={
                        language !== "English"
                          ? `pl-4 font-thin`
                          : `font-semibold`
                      }
                    >
                      English
                    </div>
                  </div>
                </div>
              )}
              <div className="flex flex-col bg-[#F9F9F9]">
                <div
                  className="flex flex-row justify-between bg-[#F3F3F3] py-5 text-darkFontColor hover:text-turquoise hover:cursor-pointer"
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                >
                  <div className="flex flex-row justify-start gap-3 mx-8 pl-16 left-0 right-0 ">
                    <div className="pt-0.25 text-2xl">
                      <BiWorld />
                    </div>
                    <span className="font-TradeGothicLTStdRegular">
                      {language}
                    </span>
                  </div>
                  <div className="pr-16 pt-0.5 font-bold text-xl text-turquoise">
                    <MdArrowForwardIos />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </ReactModal>
    </div>
  );
};

export default Menu;
