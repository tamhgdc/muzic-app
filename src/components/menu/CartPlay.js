import Title from "components/hedding/Title";
import React from "react";
import { useSelector } from "react-redux";
import "./cartPlay.css";
const CartPlay = () => {
  let { index, listSongs, isPlay } = useSelector((state) => state.control);
  return (
    <div className=" bottom-6 mt10">
      <img
        className={`block object-cover mx-auto rounded-full pointer-events-none select-none w-40 h-40 lg:w-44 lg:h-44  ${
          isPlay ? "animate-spin-slow" : "animate-spin-slow paused"
        }`}
        src={listSongs[index]?.bgImage || listSongs[index]?.avatar}
        alt=""
      />
      <div className="text-center ">
        <Title
          title={listSongs[index]?.title}
          author={listSongs[index]?.creator}
          className={"!text-xl"}
        ></Title>
        {/* <p className="text-xl font-semibold text-white capitalize">
          {listSongs[index]?.title}
        </p>
        <p className="text-sm text-text1">{listSongs[index]?.creator}</p> */}
      </div>
    </div>
  );
};

export default CartPlay;
