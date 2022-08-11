import Banner from "components/banner/Banner";
import { useSelector } from "react-redux";
import Headding from "components/hedding/Headding";
import React, { useEffect, useState } from "react";
import Loading from "components/loading/Loading";
import MusicList from "components/List/MusicList";

const Home = () => {
  const { songsData, loading } = useSelector((state) => state.musics);
  const [homeSongs, setHomeSongs] = useState([]);
  useEffect(() => {
    setHomeSongs(songsData.top100_VN);
  }, [songsData]);
  return (
    <div className="col-start-2 col-end-6 p-2">
      <Headding className="mb-3">Trending musics</Headding>
      {loading && <Loading></Loading>}
      {!loading && (
        <>
          <Banner homeSongs={homeSongs}></Banner>
          <Headding className="mb-3">Top 100</Headding>
          <MusicList homeSongs={homeSongs}></MusicList>
        </>
      )}
    </div>
  );
};

export default Home;
