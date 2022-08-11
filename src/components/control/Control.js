import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { setIndex, setIsPlay } from "saga/controlSlice";
import "./Control.css";
const Control = () => {
  let { listSongs, index } = useSelector((state) => state.control);
  const dispatch = useDispatch();
  const handleMusic = (e) => {
    if (e === 1) {
      if (index >= listSongs.length - 1) {
        dispatch(setIndex(0));
      } else {
        dispatch(setIndex(index + 1));
      }
    } else if (e === -1) {
      dispatch(setIndex(index - 1));
    }
  };
  const endMusic = () => {
    handleMusic(1);
  };
  return (
    <AudioPlayer
      className="!bg-[#120C1C] !text-cred absolute rounded-b-lg -bottom-10  right-0 z-10 w-full"
      // autoPlay
      src={listSongs[index]?.music}
      onPlay={(e) => dispatch(setIsPlay(true))}
      onPause={() => dispatch(setIsPlay(false))}
      layout="stacked-reverse"
      showSkipControls={true}
      showJumpControls={false}
      onClickNext={() => handleMusic(1)}
      onClickPrevious={() => handleMusic(-1)}
      onEnded={endMusic}
      onError={() => handleMusic(1)}
    />
  );
};

export default Control;
