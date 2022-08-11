import Title from "components/hedding/Title";
import React from "react";
import "./card.css";
const Card = ({
  bgImage,
  title,
  creator,
  avatar,
  onClick,
  selectSong,
  index,
}) => {
  return (
    <div onClick={onClick}>
      <div className="overflow-hidden">
        <img
          src={bgImage || avatar}
          alt=""
          className="h-[200px] object-cover w-full imgCard transition-all cursor-pointer"
        />
      </div>

      <Title
        color={selectSong === index ? "!text-cred" : "text-white"}
        title={title}
        author={creator}
      ></Title>
    </div>
  );
};

export default Card;
