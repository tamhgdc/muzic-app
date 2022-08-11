import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIndex, setListSongs, setSelectSong } from "saga/controlSlice";
import ListItem from "./ListItem";
const MusicList = ({ homeSongs }) => {
  let { selectSong } = useSelector((state) => state.control);
  const dispatch = useDispatch();
  const handleChoseMusic = (index, list, title) => {
    dispatch(setIndex(index));
    dispatch(setListSongs(list));
    dispatch(setSelectSong(title));
  };
  return (
    <div className="header_playlist">
      <ul className="flex w-full text-center text-gray-400 ">
        <li className="w-[10%]">#</li>
        <li className="w-[40%] capitalize">NAME</li>
        <li className="w-2/6">ARTISTS</li>
        <li>ALBUM</li>
      </ul>
      <div className="list-songs relative overflow-scroll overflow-x-hidden h-[400px]">
        {homeSongs?.length > 0 &&
          homeSongs[0].songs.map((item, index) => {
            return (
              <ListItem
                onClick={() =>
                  handleChoseMusic(index, homeSongs[0].songs, item.title)
                }
                key={index}
                index={index}
                selectSong={selectSong}
                {...item}
              ></ListItem>
            );
          })}
      </div>
    </div>
  );
};

export default MusicList;
