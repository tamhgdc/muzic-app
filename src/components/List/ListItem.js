import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Title from "components/hedding/Title";

const ListItem = ({ avatar, title, creator, index, onClick }) => {
  let { isPlay, selectSong } = useSelector((state) => state.control);

  return (
    <ul
      onClick={onClick}
      className={`${
        selectSong === title ? "!text-cred" : " text-white"
      } flex items-center my-3 text-center text-gray-400 transition-all cursor-pointer`}
    >
      <li className="w-[10%] text-lg ">{index + 1}</li>
      <li className="w-5/12">
        <img
          className={`${
            selectSong === title && isPlay
              ? "animate-spin-slow rounded-full"
              : ""
          } mx-auto  w-14 h-14`}
          src={avatar}
          alt=""
        />
      </li>
      <li className="w-2/6">
        <Title
          title={title}
          color={selectSong === title ? "!text-cred" : "text-white"}
          author={creator}
        ></Title>
      </li>
      <li>Nhạc Trẻ</li>
    </ul>
  );
};

ListItem.propTypes = {
  avatar: PropTypes.string,
  title: PropTypes.string,
  creator: PropTypes.string,
  index: PropTypes.number,
  onClick: PropTypes.func,
};
export default ListItem;
