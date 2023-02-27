import React from "react";
import OpenApp from "react-open-app";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const SocialNetworks = (props) => {
  return (
    <div className="flex flex-row justify-start mx-8 pl-16 py-4 gap-3 text-xl">
      <div className="text-darkFontColor hover:text-turquoise hover:cursor-pointer">
        <OpenApp href="https://twitter.com/">
          <BsTwitter />
        </OpenApp>
      </div>
      <div className="text-darkFontColor hover:text-turquoise hover:cursor-pointer">
        <OpenApp href="https://linkedin.com/">
          <FaLinkedinIn />
        </OpenApp>
      </div>
      <div className="text-darkFontColor hover:text-turquoise hover:cursor-pointer">
        <OpenApp href="https://instagram.com/">
          <BsInstagram />
        </OpenApp>
      </div>
      <div className="text-darkFontColor hover:text-turquoise hover:cursor-pointer">
        <OpenApp href="https://facebook.com/">
          <FaFacebookF />
        </OpenApp>
      </div>
    </div>
  );
};

export default SocialNetworks;
