import Card from "components/card/Card";
import Headding from "components/hedding/Headding";
import Loading from "components/loading/Loading";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIndex, setListSongs } from "saga/controlSlice";

const AmSongs = () => {
  const { songsData, selectSong, loading } = useSelector(
    (state) => state.musics
  );
  const [amSongs, setAmSongs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setAmSongs(songsData.top100_AM);
  }, [songsData]);
  const handleChoseMusic = (index, list) => {
    dispatch(setIndex(index));
    dispatch(setListSongs(list));
  };
  return (
    <div className="col-start-2 col-end-6 p-3">
      <Headding>Nổi Bật</Headding>
      <div className="list-songs grid h-[800px] pb-52 pr-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 overflow-scroll overflow-x-hidden">
        {loading && <Loading></Loading>}

        {!loading &&
          amSongs?.length > 0 &&
          amSongs[0].songs.map((item, index) => {
            return (
              <Card
                onClick={() => handleChoseMusic(index, amSongs[0].songs)}
                selectSong={selectSong}
                index={index}
                {...item}
                key={index}
              ></Card>
            );
          })}
      </div>
    </div>
  );
};

export default AmSongs;
