import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FcSettings } from "react-icons/fc";
import { IoIosCheckboxOutline } from "react-icons/io";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const StarIcon = () => <AiOutlineStar className="mr-1" />;
export const StarFillIcon = () => <AiFillStar className="mr-1" />;
export const SettingIcon = () => <FcSettings className="mr-1" />;
export const CheckBoxIcon = () => <IoIosCheckboxOutline className="mr-1" />;
export const MoveIcon = () => (
  <FaExpandArrowsAlt className="mr-1 drag-handle" />
);
export const GithubIcon = () => <AiFillGithub className="mr-1" />;
export const LinkedinIcon = () => <AiFillLinkedin className="mr-1" />;
