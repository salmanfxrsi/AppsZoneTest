import tailwindcss from "../../../assets/skills/tailwind.png";
import javascript from "../../../assets/skills/javascript.png";
import nextjs from "../../../assets/skills/nextjs.png";
import typescript from "../../../assets/skills/typescript.png";
import express from "../../../assets/skills/expressjs.png";
import firebase from "../../../assets/skills/firebase.png";
import html from "../../../assets/skills/html.png";
import mongodb from "../../../assets/skills/mongodb.png";
import node from "../../../assets/skills/nodejs.png";
import css from "../../../assets/skills/css.png";
import react from "../../../assets/skills/react.png";
import postman from "../../../assets/skills/postman.png";
import smallSphere from "../../../assets/small_sphere.png";
import stars from "../../../assets/stars.svg";

const skills = [
  html,
  css,
  tailwindcss,
  javascript,
  typescript,
  react,
  nextjs,
  firebase,
  node,
  express,
  mongodb,
  postman,
];

const Skills = () => {
  return (
    <div>
      {/* Title */}
      <h1 className="text-2xl text-center">
        I'm currently looking to join a{" "}
        <span className="text-[#A362FF]">cross-functional</span> team
      </h1>

      {/* Subtitle */}
      <h5 className="text-[17px] text-center mt-1">
        that values improving people's lives through amazing codes
      </h5>

      {/* Skills */}
      <div className="w-[334px] mx-auto flex flex-wrap gap-3 justify-center mt-8">
        {skills.map((skill, index) => (
          <div key={index} className="p-1 bg-[#251C31] rounded-full">
            <img className="w-[29px]" src={skill}></img>
          </div>
        ))}
      </div>

      {/* Earth Design */}
      <div className="hidden relative justify-center mb-[6.5rem] lg:flex mt-[8rem]">
        <img
          src={smallSphere}
          className="relative z-1"
          width={255}
          height={255}
          alt="Sphere"
        />
        <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img
            src={stars}
            className="w-full"
            width={950}
            height={400}
            alt="Stars"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
