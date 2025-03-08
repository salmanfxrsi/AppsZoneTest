import React from "react";
import { FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";

const ProjectCard = ({ project: { image, name, description }, index }) => {
  const isReversed = index % 2 !== 0;
  const textAlign = isReversed ? "text-right" : "text-left";
  const justifyContent = isReversed ? "justify-end" : "justify-start";
  const marginX = isReversed ? "-ml-24" : "-mr-24";
  const paddingX = isReversed ? "pr-8" : "pl-8";

  return (
    <div className={`flex ${isReversed && "flex-row-reverse"}`}>
      {/* Description */}
      <div className="flex-1">
        <h1 className={`text-[#CCD6F6] text-[34px] ml-2 mb-2 ${textAlign}`}>
          {name}
        </h1>
        <div className={`glass-effect p-7 rounded-xl ${marginX}`}>
          <p>{description}</p>
        </div>
        <div className={`flex text-5xl gap-3 mt-6 ${justifyContent}`}>
          <HiCursorClick />
          <HiCursorClick />
        </div>

        {/* Social Icons */}
        <div className={`flex gap-4 mt-10 ${justifyContent}`}>
          <FaInstagram />
          <FaLinkedin />
          <FaGoogle />
        </div>
      </div>

      {/* Image */}
      <div className={`flex-1 bg-[#2B0B3A] rounded-[10px] pt-8 ${paddingX}`}>
        <div className="w-auto h-[341px]">
          <img className="h-full w-full object-cover" src={image} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
