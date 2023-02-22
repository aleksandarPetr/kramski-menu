import React, { useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import Menu from "../Menu/Menu";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <div className="flex flex-col content-center self-auto py-6 pl-6 bg-slate-500">
      <div>
        <div onClick={handleOpen}>
          <FaAlignLeft fontSize="1.5rem" color="#D8D7D7"></FaAlignLeft>
        </div>
      </div>
      <div className="w-full md:w-2/5">
        <Menu
          isOpen={isOpen}
          onRequestClose={handleClose}
          shouldCloseOnOverlayClick={true}
          onClick={handleClose}
        />
      </div>
    </div>
  );
};

export default Main;
